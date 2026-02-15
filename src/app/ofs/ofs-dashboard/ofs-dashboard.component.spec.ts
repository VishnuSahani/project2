import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsDashboardComponent } from './ofs-dashboard.component';

describe('OfsDashboardComponent', () => {
  let component: OfsDashboardComponent;
  let fixture: ComponentFixture<OfsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
