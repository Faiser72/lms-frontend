import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageevaluationComponent } from './manageevaluation/manageevaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManageevaluationComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EvaluationModule { }
