import { Injectable } from '@nestjs/common';
import { CreateLessonDto, Lesson } from '../types';

@Injectable()
export class LessonsService {
  private lessons: Lesson[] = [
    {
      id: '1',
      lessonName: 'Continuous',
      price: 34,
      createdAt: new Date('11.02.2020'),
      updatedAt: new Date('11.02.2020'),
    },
    {
      id: '2',
      lessonName: 'Present Perfect',
      price: 50,
      createdAt: new Date('11.02.2020'),
      updatedAt: new Date('11.02.2020'),
    },
    {
      id: '3',
      lessonName: 'Home and House',
      price: 120,
      createdAt: new Date('11.02.2020'),
      updatedAt: new Date('11.02.2020'),
    },
  ];

  getAll() {
    return this.lessons;
  }

  getById(id: string) {
    return this.lessons.find((l) => l.id === id);
  }

  create(lessonDto: CreateLessonDto) {
    this.lessons.push({
      ...lessonDto,
      id: Date.now().toString(),
    });
  }
}
