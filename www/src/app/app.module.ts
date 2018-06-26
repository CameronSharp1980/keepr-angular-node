import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontPageModule } from './front-page/front-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
