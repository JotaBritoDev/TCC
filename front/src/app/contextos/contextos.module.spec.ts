import { ContextosModule } from './contextos.module';

describe('ContextosModule', () => {
  let contextosModule: ContextosModule;

  beforeEach(() => {
    contextosModule = new ContextosModule();
  });

  it('should create an instance', () => {
    expect(contextosModule).toBeTruthy();
  });
});
