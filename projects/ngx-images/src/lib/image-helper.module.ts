import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxImagesDirective } from './image-helper.directive';
import { NgxImagesService } from './image-helper.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [NgxImagesDirective],
  exports: [NgxImagesDirective],
  providers: [NgxImagesService]
})
export class NgxImagesModule { }
