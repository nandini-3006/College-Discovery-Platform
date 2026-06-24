import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlacementDto } from './dto/create-placement.dto';

@Injectable()
export class PlacementService {
    constructor(private readonly prisma: PrismaService) {}
    async create(dto: CreatePlacementDto) {
  return this.prisma.placement.create({
    data: dto,
  });
}
async findAll() {
  return this.prisma.placement.findMany();
}
async findByCollege(collegeId: number) {
  return this.prisma.placement.findUnique({
    where: {
      collegeId,
    },
  });
}
}
