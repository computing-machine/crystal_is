import { PointOfSaleModuleModule } from './point-of-sale-module.module';

describe('PointOfSaleModuleModule', () => {
  let pointOfSaleModuleModule: PointOfSaleModuleModule;

  beforeEach(() => {
    pointOfSaleModuleModule = new PointOfSaleModuleModule();
  });

  it('should create an instance', () => {
    expect(pointOfSaleModuleModule).toBeTruthy();
  });
});
