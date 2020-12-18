import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';



@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule
  ]
})
export class TemplateModule { }
