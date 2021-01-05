import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from './../../shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluatetestComponent } from './evaluatetest/evaluatetest.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { ViewevaluateComponent } from './viewevaluate/viewevaluate.component';
import { UploadanswersComponent } from './uploadanswers/uploadanswers.component';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [EvaluatetestComponent, EvaluateComponent, ViewevaluateComponent,UploadanswersComponent,UploadComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EvaluatorModule { }
