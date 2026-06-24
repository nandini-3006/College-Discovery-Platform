import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollegeModule } from './college/college.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { PlacementModule } from './placement/placement.module';
import { ReviewModule } from './review/review.module';
import { CutoffModule } from './cutoff/cutoff.module';
import { AuthModule } from './auth/auth.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [CollegeModule, PrismaModule, CourseModule, PlacementModule, ReviewModule, CutoffModule, AuthModule, QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
