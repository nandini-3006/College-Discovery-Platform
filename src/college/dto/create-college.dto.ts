import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

export class CreateCollegeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  location: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  type: string;

  @IsInt()
  establishedYear: number;

  @IsNumber()
  fees: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsString()
  overview: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}