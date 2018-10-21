import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgxImagesService, ImageConfig } from 'projects/ngx-images/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  localConfig: ImageConfig = { imageFallbackPath: 'https://www.gstatic.com/webp/gallery3/1.png',
    addLoader: true,
    loader: 'rotating-plane',
    pageLoadBoost: true
  };
  constructor(public imgHelper: NgxImagesService) {
  }
  ngOnInit() {
    this.imgHelper.setGlobal({ imageFallbackPath: 'https://www.gstatic.com/webp/gallery3/2.png',
      addLoader: true,
      loader: 'rotating-plane',
      pageLoadBoost: true
    });
  }
}
