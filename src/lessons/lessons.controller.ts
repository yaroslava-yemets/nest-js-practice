import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLessonDto, UpdateLessonDto } from '../types';
import { LessonsService } from '../services';

@Controller('lessons')
export class LessonsController {
  // Example with express
  // @Get()
  // getAllLessons(@Req() reg: Request, @Res() res: Response) {
  //   res.status(201).end('Fetched');
  //   return 'all lessons';
  // }

  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getAllLessons() {
    return this.lessonsService.getAll();
  }

  @Get(':id')
  getOneLesson(@Param() param) {
    return this.lessonsService.getById(param.id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  createLesson(@Body() lesson: CreateLessonDto) {
    return this.lessonsService.create(lesson);
  }

  @Delete(':id')
  removeLesson(@Param('id') id: string) {
    return `The lesson ${id} was deleted`;
  }

  @Put(':id')
  updateLesson(@Body() lesson: UpdateLessonDto, @Param('id') id: string) {
    return `Updated lesson ` + id + ' ' + lesson.lessonName;
  }
}
