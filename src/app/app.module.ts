import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { CustomDirective } from './directivas/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [ElementRef],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
