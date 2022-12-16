import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsController } from './lessons/lessons.controller';
import { LessonsService } from './services';

@Module({
  imports: [],
  controllers: [AppController, LessonsController],
  providers: [AppService, LessonsService],
})
export class AppModule {}
