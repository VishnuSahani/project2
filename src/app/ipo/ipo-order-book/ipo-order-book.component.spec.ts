import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoOrderBookComponent } from './ipo-order-book.component';

describe('IpoOrderBookComponent', () => {
  let component: IpoOrderBookComponent;
  let fixture: ComponentFixture<IpoOrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoOrderBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
