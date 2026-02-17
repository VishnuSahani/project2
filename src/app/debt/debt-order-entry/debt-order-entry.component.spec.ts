import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtOrderEntryComponent } from './debt-order-entry.component';

describe('DebtOrderEntryComponent', () => {
  let component: DebtOrderEntryComponent;
  let fixture: ComponentFixture<DebtOrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtOrderEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
