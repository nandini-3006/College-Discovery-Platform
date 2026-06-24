import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';

import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createQuestion(@Body() dto: CreateQuestionDto, @Req() req: any) {
    return this.questionService.createQuestion(dto, req.user.userId);
  }

  @Get('college/:collegeId')
  getQuestionsByCollege(
    @Param('collegeId', ParseIntPipe) collegeId: number,
  ) {
    return this.questionService.getQuestionsByCollege(collegeId);
  }
}