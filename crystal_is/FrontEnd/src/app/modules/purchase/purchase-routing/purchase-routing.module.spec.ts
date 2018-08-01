import { PurchaseRoutingModule } from './purchase-routing.module';

describe('PurchaseRoutingModule', () => {
  let purchaseRoutingModule: PurchaseRoutingModule;

  beforeEach(() => {
    purchaseRoutingModule = new PurchaseRoutingModule();
  });

  it('should create an instance', () => {
    expect(purchaseRoutingModule).toBeTruthy();
  });
});
