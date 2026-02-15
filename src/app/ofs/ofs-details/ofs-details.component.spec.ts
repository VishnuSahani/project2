import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsDetailsComponent } from './ofs-details.component';

describe('OfsDetailsComponent', () => {
  let component: OfsDetailsComponent;
  let fixture: ComponentFixture<OfsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
