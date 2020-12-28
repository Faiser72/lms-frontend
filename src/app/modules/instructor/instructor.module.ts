import { QuestionModule } from './question/question.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryModule,
    CourseModule,
    QuestionModule
  ]
})
export class InstructorModule { }
