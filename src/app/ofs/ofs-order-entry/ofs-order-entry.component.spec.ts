import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsOrderEntryComponent } from './ofs-order-entry.component';

describe('OfsOrderEntryComponent', () => {
  let component: OfsOrderEntryComponent;
  let fixture: ComponentFixture<OfsOrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsOrderEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
