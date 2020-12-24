import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourse, ManagecourseComponent } from './managecourse/managecourse.component';



@NgModule({
  declarations: [ManagecourseComponent,AddCourse],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddCourse]
})
export class CourseModule { }
