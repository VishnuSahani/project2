import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtDashboardComponent } from './debt-dashboard.component';

describe('DebtDashboardComponent', () => {
  let component: DebtDashboardComponent;
  let fixture: ComponentFixture<DebtDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
