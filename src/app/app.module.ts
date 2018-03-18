import { Base64 } from './base64/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/component';
import { EditorComponent } from './editor/component';
import { LayersComponent } from './layers/component';
import { PalletsComponent } from './pallets/component';
import { ViewportComponent } from './viewport/component';
import { FormsModule } from '@angular/forms';

window['base64'] = Base64;
@NgModule({
  declarations: [
    MainComponent,
    EditorComponent,
    PalletsComponent,
    LayersComponent,
    ViewportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    MainComponent,
    EditorComponent,
    PalletsComponent,
    LayersComponent,
    ViewportComponent,
  ]
})
export class AppModule { }
