import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get('college/:id')
  findByCollege(@Param('id') id: string) {
    return this.reviewService.findByCollege(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateReviewDto) {
    return this.reviewService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(Number(id));
  }
}