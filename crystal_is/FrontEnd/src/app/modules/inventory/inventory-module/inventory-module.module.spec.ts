import { InventoryModuleModule } from './inventory-module.module';

describe('InventoryModuleModule', () => {
  let inventoryModuleModule: InventoryModuleModule;

  beforeEach(() => {
    inventoryModuleModule = new InventoryModuleModule();
  });

  it('should create an instance', () => {
    expect(inventoryModuleModule).toBeTruthy();
  });
});
