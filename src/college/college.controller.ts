import { BadRequestException, Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CollegeService } from './college.service';
import { Body, Post,Param } from '@nestjs/common';
import { CreateCollegeDto } from './dto/create-college.dto';
import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { UpdateCollegeDto } from './dto/update-college.dto';
import { PredictDto } from './dto/predict-college.dto';
@Controller('college')
export class CollegeController {
    constructor(private readonly collegeService: CollegeService) {}

    @Post('predict')
predict(@Body() body: PredictDto) {
  console.log("PREDICT HIT", body);
  return this.collegeService.predictColleges(body.exam, body.rank);
}
  @Get('home')
  getHome() {
    return this.collegeService.getHome();
  }
  @Post()
createCollege(@Body() createCollegeDto: CreateCollegeDto) {
  return this.collegeService.createCollege(createCollegeDto);
}
@Get('search')
findAll(@Query() query: any) {
  return this.collegeService.findAll(query);
}
@Get()
async getAllColleges() {
  return await this.collegeService.getAllColleges();
}
@Get('compare')
compareColleges(@Query('ids') ids: string) {

  // 1. check if ids exists
  if (!ids) {
    throw new BadRequestException('ids is required');
  }

  // 2. convert safely
  const idArray = ids
    .split(',')
    .map(id => Number(id))
    .filter(id => !isNaN(id));

  // 3. check again
  if (idArray.length === 0) {
    throw new BadRequestException('Invalid ids');
  }

  return this.collegeService.compareColleges(idArray);
}
@Get(':id')
getCollegeById(@Param('id', ParseIntPipe) id: number) {
  return this.collegeService.getCollegeById(id);
}

@Patch(':id')
updateCollege(
  @Param('id') id: string,
  @Body() dto: UpdateCollegeDto,
) {
  return this.collegeService.updateCollege(Number(id), dto);
}
@Delete(':id')
deleteCollege(@Param('id') id: string) {
  return this.collegeService.deleteCollege(Number(id));
}

  @Get(':id/details')
  getDetails(@Param('id') id: string) {
    return this.collegeService.getCollegeDetails(Number(id));
  }

}
