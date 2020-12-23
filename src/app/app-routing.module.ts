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


const routes: Routes = [
  {
    path: "", component: DefaultComponent,
    children: [
      { path: "", component: TemplateComponent },
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
      { path: "managemedia", component: ManagemediaComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
