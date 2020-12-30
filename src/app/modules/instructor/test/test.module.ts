import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestlistComponent } from './testlist/testlist.component';
import { CreatetestComponent } from './createtest/createtest.component';
import { EdittestComponent } from './edittest/edittest.component';
import { AddScheduleTest, EditScheduleTest, ScheduletestComponent } from './scheduletest/scheduletest.component';
import { ManageassignmentComponent } from './manageassignment/manageassignment.component';
import { AddstudentComponent } from './addstudent/addstudent.component';



@NgModule({
  declarations: [TestlistComponent, CreatetestComponent, EdittestComponent, ScheduletestComponent,AddScheduleTest,EditScheduleTest, ManageassignmentComponent, AddstudentComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    AddScheduleTest,
    EditScheduleTest
  ]
})
export class TestModule { }
