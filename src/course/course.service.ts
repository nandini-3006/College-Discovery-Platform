import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
    constructor(private readonly prisma: PrismaService) {}
    async create(dto:CreateCourseDto) {
  return this.prisma.course.create({
    data: dto,
  });
}
async getCourses(collegeId: number) {
  return this.prisma.course.findMany({
    where: {
      collegeId,
    },
  });
}
}
