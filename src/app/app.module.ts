import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    EditorComponent
  ]
})
export class AppModule { }
