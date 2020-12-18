import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { TemplateComponent } from './modules/template/template/template.component';


const routes: Routes = [
  {
    path: "", component: DefaultComponent,
    children: [{ path: "", component: TemplateComponent }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
