import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsOrderBookComponent } from './ofs-order-book.component';

describe('OfsOrderBookComponent', () => {
  let component: OfsOrderBookComponent;
  let fixture: ComponentFixture<OfsOrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsOrderBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
