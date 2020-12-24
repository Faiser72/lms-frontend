import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryModule,
    CourseModule
  ]
})
export class InstructorModule { }
