import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFinishedGoodComponent } from './search-finished-good.component';

describe('SearchFinishedGoodComponent', () => {
  let component: SearchFinishedGoodComponent;
  let fixture: ComponentFixture<SearchFinishedGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFinishedGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFinishedGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
