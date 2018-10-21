import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ImageHelperDirective } from './image-helper.directive';
import { ImageHelperService } from './image-helper.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [ImageHelperDirective],
  exports: [ImageHelperDirective],
  providers: [ImageHelperService]
})
export class ImageHelperModule { }
