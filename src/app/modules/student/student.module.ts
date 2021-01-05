import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from './../../shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseapprovedComponent } from './courseapproved/courseapproved.component';
import { TestscheduledComponent } from './testscheduled/testscheduled.component';
import { TestcompletedComponent } from './testcompleted/testcompleted.component';



@NgModule({
  declarations: [CourseapprovedComponent, TestscheduledComponent, TestcompletedComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class StudentModule { }
