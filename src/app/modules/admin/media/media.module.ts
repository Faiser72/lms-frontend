import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagemediaComponent } from './managemedia/managemedia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';



@NgModule({
  declarations: [ManagemediaComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MediaModule { }
