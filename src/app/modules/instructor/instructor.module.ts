import { TestModule } from './test/test.module';
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
    QuestionModule,
    TestModule
  ]
})
export class InstructorModule { }
