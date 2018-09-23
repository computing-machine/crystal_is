import { SalesRoutingModuleModule } from './sales-routing-module.module';

describe('SalesRoutingModuleModule', () => {
  let salesRoutingModuleModule: SalesRoutingModuleModule;

  beforeEach(() => {
    salesRoutingModuleModule = new SalesRoutingModuleModule();
  });

  it('should create an instance', () => {
    expect(salesRoutingModuleModule).toBeTruthy();
  });
});
