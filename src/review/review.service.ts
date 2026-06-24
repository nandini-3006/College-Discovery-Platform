import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateReviewDto) {
    return this.prisma.review.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  findByCollege(collegeId: number) {
    return this.prisma.review.findMany({
      where: { collegeId },
    });
  }

  update(id: number, dto: Partial<CreateReviewDto>) {
    return this.prisma.review.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}