import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCutoffDto } from './dto/create-cutoff.dto';

@Injectable()
export class CutoffService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCutoffDto) {
    return this.prisma.cutoff.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.cutoff.findMany({
      include: {
        college: true,
      },
    });
  }
}