import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceCalculatorComponent } from './distance-calculator.component';

describe('DistanceCalculatorComponent', () => {
  let component: DistanceCalculatorComponent;
  let fixture: ComponentFixture<DistanceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
