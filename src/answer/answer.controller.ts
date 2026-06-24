import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AnswerService } from './answer.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createAnswer(@Body() dto: CreateAnswerDto, @Req() req: any) {
    return this.answerService.createAnswer(dto, req.user.userId);
  }

  @Get('question/:questionId')
  getAnswersByQuestion(
    @Param('questionId', ParseIntPipe) questionId: number,
  ) {
    return this.answerService.getAnswersByQuestion(questionId);
  }
}