import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from './../../../shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionPaper, EditQuestionPaper, UploadquestionpaperComponent } from './uploadquestionpaper/uploadquestionpaper.component';
import { QuestionbankComponent, AddQuestionBank, EditQuestionBank } from './questionbank/questionbank.component';



@NgModule({
  declarations: [
    UploadquestionpaperComponent,
    AddQuestionPaper,
    EditQuestionPaper,
    QuestionbankComponent,
    AddQuestionBank,
    EditQuestionBank],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddQuestionPaper,
    EditQuestionPaper,
    AddQuestionBank,
    EditQuestionBank]
})
export class QuestionModule { }
