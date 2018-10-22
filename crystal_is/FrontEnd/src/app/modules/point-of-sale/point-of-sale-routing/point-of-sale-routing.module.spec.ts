import { PointOfSaleRoutingModule } from './point-of-sale-routing.module';

describe('PointOfSaleRoutingModule', () => {
  let pointOfSaleRoutingModule: PointOfSaleRoutingModule;

  beforeEach(() => {
    pointOfSaleRoutingModule = new PointOfSaleRoutingModule();
  });

  it('should create an instance', () => {
    expect(pointOfSaleRoutingModule).toBeTruthy();
  });
});
