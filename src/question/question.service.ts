import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class QuestionService {
    constructor(private prisma: PrismaService) {}
    async createQuestion(dto: CreateQuestionDto, userId: number) {
  return this.prisma.question.create({
    data: {
      title: dto.title,
      content: dto.content,
      collegeId: dto.collegeId,
      userId: userId,
    },
  });
}
async getQuestionsByCollege(collegeId: number) {
  return this.prisma.question.findMany({
    where: {
      collegeId,
    },
    include: {
      user: true,
      answers: {
        include: {
          user: true,
        },
      },
      college: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
}
