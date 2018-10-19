import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseLookupFormComponent } from './reverse-lookup-form.component';

describe('ReverseLookupFormComponent', () => {
  let component: ReverseLookupFormComponent;
  let fixture: ComponentFixture<ReverseLookupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseLookupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseLookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
