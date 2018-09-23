import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateUnitComponent } from './activate-unit.component';

describe('ActivateUnitComponent', () => {
  let component: ActivateUnitComponent;
  let fixture: ComponentFixture<ActivateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
