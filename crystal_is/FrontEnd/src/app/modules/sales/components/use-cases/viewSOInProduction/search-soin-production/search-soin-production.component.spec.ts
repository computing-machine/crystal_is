import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSOInProductionComponent } from './search-soin-production.component';

describe('SearchSOInProductionComponent', () => {
  let component: SearchSOInProductionComponent;
  let fixture: ComponentFixture<SearchSOInProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSOInProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSOInProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
