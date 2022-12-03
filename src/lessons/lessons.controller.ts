import { Controller, Get, Param } from '@nestjs/common';

@Controller('lessons')
export class LessonsController {
  @Get()
  getAllLessons() {
    return 'all lessons';
  }

  @Get(':id')
  getOneLesson(@Param() param) {
    return 'getOne ' + param.id;
  }
}
