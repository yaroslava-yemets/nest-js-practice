export class Lesson {
  id: string;
  lessonName: string;
  price: number;
  files?: File[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class CreateLessonDto {
  readonly price: number;
  // matetials: File[];
  lessonName: string;
}

export class UpdateLessonDto {
  readonly price: number;
  // matetials: File[];
  lessonName: string;
}
