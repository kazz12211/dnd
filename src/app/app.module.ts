import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
