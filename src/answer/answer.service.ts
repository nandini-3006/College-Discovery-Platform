import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async createAnswer(dto: any, userId: number) {
    return this.prisma.answer.create({
      data: {
        content: dto.content,
        questionId: dto.questionId,
        userId: userId,
      },
    });
  }

  async getAnswersByQuestion(questionId: number) {
    return this.prisma.answer.findMany({
      where: { questionId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}