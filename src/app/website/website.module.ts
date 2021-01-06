import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ParticlesModule } from 'angular-particle';



@NgModule({
  declarations: [LandingpageComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule
  ]
})
export class WebsiteModule { }
