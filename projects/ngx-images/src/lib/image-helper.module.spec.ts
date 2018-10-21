import { NgxImagesModule } from './image-helper.module';

describe('NgxImagesModule', () => {
  let ngxImagesModule: NgxImagesModule;

  beforeEach(() => {
    ngxImagesModule = new NgxImagesModule();
  });

  it('should create an instance', () => {
    expect(ngxImagesModule).toBeTruthy();
  });
});
