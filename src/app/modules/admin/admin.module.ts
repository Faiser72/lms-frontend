import { MediaModule } from './media/media.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    EvaluationModule,
    MediaModule
  ]
})
export class AdminModule { }
