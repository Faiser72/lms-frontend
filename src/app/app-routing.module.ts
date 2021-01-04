import { EditassessmentComponent } from './modules/instructor/course/editassessment/editassessment.component';
import { ManageassessmentComponent } from './modules/instructor/course/manageassessment/manageassessment.component';
import { AddstudentComponent } from './modules/instructor/test/addstudent/addstudent.component';
import { ManageassignmentComponent } from './modules/instructor/test/manageassignment/manageassignment.component';
import { ScheduletestComponent } from './modules/instructor/test/scheduletest/scheduletest.component';
import { EdittestComponent } from './modules/instructor/test/edittest/edittest.component';
import { CreatetestComponent } from './modules/instructor/test/createtest/createtest.component';
import { TestlistComponent } from './modules/instructor/test/testlist/testlist.component';
import { EditquestionComponent } from './modules/instructor/question/editquestion/editquestion.component';
import { AddquestionComponent } from './modules/instructor/question/addquestion/addquestion.component';
import { ManagequestionComponent } from './modules/instructor/question/managequestion/managequestion.component';
import { UploadquestionpaperComponent } from './modules/instructor/question/uploadquestionpaper/uploadquestionpaper.component';
import { ManagesessionComponent } from './modules/instructor/course/managesession/managesession.component';
import { ManagecourseComponent } from './modules/instructor/course/managecourse/managecourse.component';
import { ManagecategoryComponent } from './modules/instructor/category/managecategory/managecategory.component';
import { ManagemediaComponent } from './modules/admin/media/managemedia/managemedia.component';
import { ManageevaluationComponent } from './modules/admin/evaluation/manageevaluation/manageevaluation.component';
import { ListuserComponent } from './modules/admin/user/listuser/listuser.component';
import { UserhomeComponent } from './modules/admin/user/userhome/userhome.component';
import { EdituserComponent } from './modules/admin/user/edituser/edituser.component';
import { AdduserComponent } from './modules/admin/user/adduser/adduser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { TemplateComponent } from './modules/template/template/template.component';
import { ManagechapterComponent } from './modules/instructor/course/managechapter/managechapter.component';
import { QuestionbankComponent } from './modules/instructor/question/questionbank/questionbank.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { CreateassessmentComponent } from './modules/instructor/course/createassessment/createassessment.component';


const routes: Routes = [
  {
    path: "", component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      // Admin starts here
      {
        path: "userhome",
        component: UserhomeComponent,
        children: [
          { path: "adduser", component: AdduserComponent },
          { path: "edituser", component: EdituserComponent },
          { path: "listuser", component: ListuserComponent },
        ],
      },
      { path: "manageevaluation", component: ManageevaluationComponent },
      { path: "managemedia", component: ManagemediaComponent },
      // Admin ends here

      // instructor starts here
      { path: "managecategory", component: ManagecategoryComponent },
      { path: "managecourse", component: ManagecourseComponent },
      { path: "managesession", component: ManagesessionComponent },
      { path: "managechapter", component: ManagechapterComponent },
      { path: "manageassessment", component: ManageassessmentComponent },
      { path: "createassessment", component: CreateassessmentComponent },
      { path: "editassessment", component: EditassessmentComponent },
      { path: "uploadquestionpaper", component: UploadquestionpaperComponent },
      { path: "questionbank", component: QuestionbankComponent },
      { path: "managequestion", component: ManagequestionComponent },
      { path: "addquestion", component: AddquestionComponent },
      { path: "editquestion", component: EditquestionComponent },
      { path: "testlist", component: TestlistComponent },
      { path: "createtest", component: CreatetestComponent },
      { path: "edittest", component: EdittestComponent },
      { path: "scheduleTest", component: ScheduletestComponent },
      { path: "manageassignment", component: ManageassignmentComponent },
      { path: "addstudent", component: AddstudentComponent },









      // instructor ends here

    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
