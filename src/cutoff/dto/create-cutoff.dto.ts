import { IsString, IsInt } from 'class-validator';

export class CreateCutoffDto {
  @IsString()
  exam: string;

  @IsInt()
  collegeId: number;

  @IsInt()
  maxRank: number;
}