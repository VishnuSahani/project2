import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoDashboardComponent } from './ipo-dashboard.component';

describe('IpoDashboardComponent', () => {
  let component: IpoDashboardComponent;
  let fixture: ComponentFixture<IpoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
