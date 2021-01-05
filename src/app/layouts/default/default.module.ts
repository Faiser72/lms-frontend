import { StudentModule } from './../../modules/student/student.module';
import { EvaluatorModule } from './../../modules/evaluator/evaluator.module';
import { DashboardModule } from './../../modules/dashboard/dashboard.module';
import { InstructorModule } from './../../modules/instructor/instructor.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TemplateModule } from "src/app/modules/template/template.module";
import { MaterialImportModuleModule } from "src/app/shared/material-import-module/material-import-module.module";
import { AdminModule } from "src/app/modules/admin/admin.module";

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialImportModuleModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    TemplateModule,
    AdminModule,
    InstructorModule,
    EvaluatorModule,
    StudentModule
  ],
})
export class DefaultModule { }
