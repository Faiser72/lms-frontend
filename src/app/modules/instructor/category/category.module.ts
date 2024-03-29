import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategory, EditCategory, ManagecategoryComponent } from './managecategory/managecategory.component';



@NgModule({
  declarations: [ManagecategoryComponent, AddCategory, EditCategory],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddCategory, EditCategory]
})
export class CategoryModule { }
