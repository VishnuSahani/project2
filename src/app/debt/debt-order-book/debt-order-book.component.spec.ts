import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtOrderBookComponent } from './debt-order-book.component';

describe('DebtOrderBookComponent', () => {
  let component: DebtOrderBookComponent;
  let fixture: ComponentFixture<DebtOrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtOrderBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
