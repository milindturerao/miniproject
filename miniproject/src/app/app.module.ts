import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoute } from './app.route';
import { MasterComponent } from './master.component';
import { PageoneComponent } from './pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
