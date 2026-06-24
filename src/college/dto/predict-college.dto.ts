import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class PredictDto {
  @IsString()
  exam: string;

  @Type(() => Number)
  @IsNumber()
  rank: number;
}