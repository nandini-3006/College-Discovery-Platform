import {Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePlacementDto } from './dto/create-placement.dto';
import { PlacementService } from './placement.service';
@Controller('placement')
export class PlacementController {
    constructor(private readonly placementService: PlacementService) {}

    @Post()
create(@Body() dto: CreatePlacementDto) {
  return this.placementService.create(dto);
}

@Get()
findAll() {
  return this.placementService.findAll();
}

@Get('college/:id')
findByCollege(@Param('id') id: string) {
  return this.placementService.findByCollege(Number(id));
}
}
