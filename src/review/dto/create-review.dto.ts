import { IsString, IsInt, IsNumber, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  studentName: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  comment: string;

  @IsInt()
  collegeId: number;
}