import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface ImageConfig {
  imageFallbackPath: string;
  addLoader: boolean;
  loader: string;
  pageLoadBoost: boolean;
}
@Injectable()
export class NgxImagesService {
    public globalFallBackPath: BehaviorSubject<ImageConfig> =
           new BehaviorSubject<ImageConfig>({imageFallbackPath: '', addLoader: true, loader: 'rotating-plane', pageLoadBoost: true});
    private configIn: ImageConfig = {imageFallbackPath: '', addLoader: true, loader: 'rotating-plane', pageLoadBoost: true};
    constructor() {
    }
    returnConfig(): ImageConfig {
        return this.configIn;
    }
    public setGlobal(config: ImageConfig) {
        this.configIn = config;
        this.globalFallBackPath.next(config);
    }
}
