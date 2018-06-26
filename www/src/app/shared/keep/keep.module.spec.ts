import { KeepModule } from './keep.module';

describe('KeepModule', () => {
  let keepModule: KeepModule;

  beforeEach(() => {
    keepModule = new KeepModule();
  });

  it('should create an instance', () => {
    expect(keepModule).toBeTruthy();
  });
});
