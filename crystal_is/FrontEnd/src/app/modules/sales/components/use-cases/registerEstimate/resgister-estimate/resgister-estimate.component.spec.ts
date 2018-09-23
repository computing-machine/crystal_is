import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterEstimateComponent } from './resgister-estimate.component';

describe('ResgisterEstimateComponent', () => {
  let component: ResgisterEstimateComponent;
  let fixture: ComponentFixture<ResgisterEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
