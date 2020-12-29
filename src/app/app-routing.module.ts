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


const routes: Routes = [
  {
    path: "", component: DefaultComponent,
    children: [
      { path: "", component: TemplateComponent },
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
      { path: "uploadquestionpaper", component: UploadquestionpaperComponent },
      { path: "questionbank", component: QuestionbankComponent },
      { path: "managequestion", component: ManagequestionComponent },
      { path: "addquestion", component: AddquestionComponent },
      { path: "editquestion", component: EditquestionComponent },



      // instructor ends here

    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
