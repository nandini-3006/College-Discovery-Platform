import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollegeDto } from './dto/create-college.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateCollegeDto } from './dto/update-college.dto';
@Injectable()
export class CollegeService {
  constructor(private prisma: PrismaService) {}

  getHome() {
    return {
      message: 'Welcome to Vidya',
      hero: {
        title: 'Find Your Dream College',
        subtitle: 'Discover colleges, compare, and make informed decisions.',
      },
      featuredColleges: [],
      categories: [],
      stats: {
        colleges: 0,
        students: 0,
        reviews: 0,
      },
    };
  }
async createCollege(dto: CreateCollegeDto) {
  return this.prisma.college.create({
    data: dto,
  });
}
async getAllColleges() {
  return await this.prisma.college.findMany();
}
async getCollegeById(id: number) {
  return await this.prisma.college.findUnique({
    where: {
      id,
    },  
  });
}
async updateCollege(id: number, dto: UpdateCollegeDto) {
  return this.prisma.college.update({
    where: { id },
    data: dto,
  });
}
async deleteCollege(id: number) {
  return this.prisma.college.delete({
    where: { id },
  });
}
async findAll(query: any) {
  const {
    search,
    city,
    state,
    type,
    minFees,
    maxFees,
    minRating,
    sort,
    page = 1,
    limit = 10,
  } = query;

  const where: any = {};

  // SEARCH (name)
  if (search) {
    where.name = {
      contains: search,
      mode: 'insensitive',
    };
  }

  // FILTERS
  if (city) {
    where.city = {
      contains: city,
      mode: 'insensitive',
    };
  }

  if (state) {
    where.state = {
      contains: state,
      mode: 'insensitive',
    };
  }

  if (type) {
    where.type = type;
  }

  // FEES RANGE
  if (minFees || maxFees) {
    where.fees = {
      gte: minFees ? Number(minFees) : undefined,
      lte: maxFees ? Number(maxFees) : undefined,
    };
  }

  // RATING FILTER
  if (minRating) {
    where.rating = {
      gte: Number(minRating),
    };
  }

  // SORTING
  let orderBy: any = { id: 'desc' };

  if (sort === 'rating_desc') {
    orderBy = { rating: 'desc' };
  } else if (sort === 'fees_asc') {
    orderBy = { fees: 'asc' };
  } else if (sort === 'fees_desc') {
    orderBy = { fees: 'desc' };
  } else if (sort === 'established_desc') {
    orderBy = { establishedYear: 'desc' };
  }

  return this.prisma.college.findMany({
    where,
    orderBy,
    skip: (page - 1) * limit,
    take: Number(limit),
  });
}
async getCollegeDetails(id: number) {
  const college = await this.prisma.college.findUnique({
    where: { id },
    include: {
      courses: true,
      placement: true,
      reviews: true,
      cutoffs: true,
    },
  });

  if (!college) {
    throw new  NotFoundException('College not found');
  }

  return college;
}
async compareColleges(ids: number[]) {
  const colleges = await this.prisma.college.findMany({
    where: {
      id: { in: ids },
    },
    include: {
      placement: true,
    },
  });

  return colleges.map((college) => ({
    id: college.id,
    name: college.name,
    location: `${college.city}, ${college.state}`,
    fees: college.fees,
    rating: college.rating,

    placement: college.placement
      ? {
          highestPackage: college.placement.highestPackage,
          averagePackage: college.placement.averagePackage,
          placementPercent: college.placement.placementPercent,
        }
      : null,
  }));
}
async predictColleges(exam: string, rank: number) {
  const cutoffs = await this.prisma.cutoff.findMany({
    where: {
      exam,
      maxRank: {
        gte: rank,
      },
    },
    include: {
      college: {
        include: {
          placement: true,
        },
      },
    },
  });

  return cutoffs.map((c) => ({
    collegeId: c.college.id,
    name: c.college.name,
    location: `${c.college.city}, ${c.college.state}`,
    fees: c.college.fees,
    rating: c.college.rating,
    maxRank: c.maxRank,
    placementPercent: c.college.placement?.placementPercent,
  }));
}
}
