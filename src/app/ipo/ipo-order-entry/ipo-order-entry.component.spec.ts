import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoOrderEntryComponent } from './ipo-order-entry.component';

describe('IpoOrderEntryComponent', () => {
  let component: IpoOrderEntryComponent;
  let fixture: ComponentFixture<IpoOrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoOrderEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
