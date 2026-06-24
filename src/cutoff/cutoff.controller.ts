import { Body, Controller, Get, Post } from '@nestjs/common';
import { CutoffService } from './cutoff.service';
import { CreateCutoffDto } from './dto/create-cutoff.dto';

@Controller('cutoff')
export class CutoffController {
  constructor(private readonly cutoffService: CutoffService) {}

  @Post()
  create(@Body() dto: CreateCutoffDto) {
    return this.cutoffService.create(dto);
  }

  @Get()
  findAll() {
    return this.cutoffService.findAll();
  }
}