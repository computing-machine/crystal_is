import { InventoryRoutingModule } from './inventory-routing.module';

describe('InventoryRoutingModule', () => {
  let inventoryRoutingModule: InventoryRoutingModule;

  beforeEach(() => {
    inventoryRoutingModule = new InventoryRoutingModule();
  });

  it('should create an instance', () => {
    expect(inventoryRoutingModule).toBeTruthy();
  });
});
