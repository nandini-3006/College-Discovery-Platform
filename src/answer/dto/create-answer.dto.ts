import { IsString, IsInt, MinLength } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  @MinLength(5)
  content: string;

  @IsInt()
  questionId: number;
}