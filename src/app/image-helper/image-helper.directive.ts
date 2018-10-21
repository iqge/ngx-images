import { Directive, ElementRef, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ImageHelperService, ImageConfig } from './image-helper.service';


@Directive({
  selector: '[isImageHelper]'
})
export class ImageHelperDirective implements OnInit, AfterViewInit {
  @Input('imageConfig') localConfig: ImageConfig;
  private globalConfig: ImageConfig;
  private originalPath = '';
  doneLoading = false;

  constructor
    (
    private el: ElementRef,
    private global: ImageHelperService
    ) {
  }
  @HostListener('onload', ['$event'])
  pageLoad() {
    // runRestHere
    this.el.nativeElement.src = this.originalPath.slice();
  }
  @HostListener('error', ['$event'])
  onError() {
    console.log(this.el);
    this.el.nativeElement.src = this.localConfig && this.localConfig.imageFallbackPath ? this.localConfig.imageFallbackPath : this.globalConfig.imageFallbackPath;
    // this.el.nativeElement.src = '';
  }
  ngAfterViewInit() {
      this.el.nativeElement.onload = () => {this.createImage(); };
      this.el.nativeElement.src = document.readyState === 'complete' && this.originalPath ;
  }
  setGlobalFallBackPath(config: ImageConfig) {
    this.globalConfig = config;
  }
  ngOnInit() {
    this.globalConfig = this.global.returnConfig();
    this.originalPath = this.el.nativeElement.src.slice(); 
    this.el.nativeElement.src = '';  
        
    this.showLoader();
    this.global.globalFallBackPath.subscribe((config: ImageConfig) => {
      this.globalConfig = config;
    });
    Promise.all([this.showLoader()]);
  }
  showLoader() {
    return new Promise(resolve => {
        console.log(this.el.nativeElement);
        const loader = document.createElement('div');
        loader.innerHTML = this.prepareLoader();
        this.el.nativeElement.style.display = 'none';
        if (this.el.nativeElement.parentNode.children.length === 1) {
          this.el.nativeElement.parentNode.appendChild(loader.firstChild);
        }
      resolve(true);
    });
  }

  createImage() {
      this.el.nativeElement.style.display = 'block';
      console.log(this.el);
      this.el.nativeElement.parentNode.children[1].remove();
  }
  prepareLoader() {
    return `<div class="is-loader"><div class="sk-rotating-plane"></div></div>`;
  }
}
