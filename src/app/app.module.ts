import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
