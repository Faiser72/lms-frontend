import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart, LandingpageComponent, Login } from './landingpage/landingpage.component';
import { ParticlesModule } from 'angular-particle';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LandingpageComponent, LoginComponent,Login,Cart],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule
  ],
  entryComponents:[Login,Cart]
})
export class WebsiteModule { }
