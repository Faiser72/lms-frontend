import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserhomeComponent } from './userhome/userhome.component';



@NgModule({
  declarations: [AdduserComponent, EdituserComponent, ListuserComponent, UserhomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
