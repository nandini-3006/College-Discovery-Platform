import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsString()
  duration: string;

  @IsNumber()
  fees: number;

  @IsNumber()
  collegeId: number;
}