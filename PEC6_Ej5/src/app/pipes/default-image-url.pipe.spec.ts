import { DefaultImageURLPipe } from './default-image-url.pipe';

describe('DefaultImageURLPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultImageURLPipe();
    expect(pipe).toBeTruthy();
  });
});
