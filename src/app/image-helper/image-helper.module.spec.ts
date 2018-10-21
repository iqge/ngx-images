import { ImageHelperModule } from './image-helper.module';

describe('ImageHelperModule', () => {
  let imageHelperModule: ImageHelperModule;

  beforeEach(() => {
    imageHelperModule = new ImageHelperModule();
  });

  it('should create an instance', () => {
    expect(imageHelperModule).toBeTruthy();
  });
});
