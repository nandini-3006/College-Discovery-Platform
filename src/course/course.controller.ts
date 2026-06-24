import {Body,Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    create(@Body() dto: CreateCourseDto) {
        return this.courseService.create(dto);
    }

    @Get('college/:id')
    getCourses(@Param('id') id: string) {
  return this.courseService.getCourses(Number(id));
}
}
