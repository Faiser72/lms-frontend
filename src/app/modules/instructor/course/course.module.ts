import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourse, EditCourse, ManagecourseComponent } from './managecourse/managecourse.component';
import { AddSession, EditSession, ManagesessionComponent } from './managesession/managesession.component';
import { ManagechapterComponent, AddChapter, EditChapter } from './managechapter/managechapter.component';
import { ManageassessmentComponent } from './manageassessment/manageassessment.component';
import { CreateassessmentComponent } from './createassessment/createassessment.component';
import { EditassessmentComponent } from './editassessment/editassessment.component';



@NgModule({
  declarations: [ManagecourseComponent,
    AddCourse,
    EditCourse,
    ManagesessionComponent,
    AddSession, EditSession,
    ManagechapterComponent,
    AddChapter,
    EditChapter,
    ManageassessmentComponent,
    CreateassessmentComponent,
    EditassessmentComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [AddCourse,
    EditCourse,
    AddSession,
    EditSession,
    AddChapter,
    EditChapter]
})
export class CourseModule { }
