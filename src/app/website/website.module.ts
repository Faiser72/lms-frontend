import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent, Login } from './landingpage/landingpage.component';
import { ParticlesModule } from 'angular-particle';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LandingpageComponent, LoginComponent,Login],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule
  ],
  entryComponents:[Login]
})
export class WebsiteModule { }
