import { IsInt, IsNumber } from 'class-validator';

export class CreatePlacementDto {

  @IsNumber()
  highestPackage: number;

  @IsNumber()
  averagePackage: number;

  @IsNumber()
  placementPercent: number;

  @IsInt()
  collegeId: number;
}