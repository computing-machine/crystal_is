import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchActiveUnitComponent } from './search-active-unit.component';

describe('SearchActiveUnitComponent', () => {
  let component: SearchActiveUnitComponent;
  let fixture: ComponentFixture<SearchActiveUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchActiveUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchActiveUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
