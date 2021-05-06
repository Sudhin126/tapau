import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackagesDashboardComponent } from './addpackages-dashboard.component';

describe('AddpackagesDashboardComponent', () => {
  let component: AddpackagesDashboardComponent;
  let fixture: ComponentFixture<AddpackagesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpackagesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpackagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
