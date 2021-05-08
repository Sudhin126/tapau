import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboysDashboardComponent } from './deliveryboys-dashboard.component';

describe('DeliveryboysDashboardComponent', () => {
  let component: DeliveryboysDashboardComponent;
  let fixture: ComponentFixture<DeliveryboysDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboysDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboysDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
