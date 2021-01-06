import { MaterialImportModuleModule } from 'src/app/shared/material-import-module/material-import-module.module';
import { WebsiteModule } from './website/website.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    WebsiteModule,
    // MaterialImportModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
