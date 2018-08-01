import { PurchaseModuleModule } from './purchase-module.module';

describe('PurchaseModuleModule', () => {
  let purchaseModuleModule: PurchaseModuleModule;

  beforeEach(() => {
    purchaseModuleModule = new PurchaseModuleModule();
  });

  it('should create an instance', () => {
    expect(purchaseModuleModule).toBeTruthy();
  });
});
