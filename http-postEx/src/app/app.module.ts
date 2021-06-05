import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { upperCaseComponent } from './component/upperCase.conponent';

@NgModule({
  declarations: [
    AppComponent,
    upperCaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [upperCaseComponent]
})
export class AppModule { }
