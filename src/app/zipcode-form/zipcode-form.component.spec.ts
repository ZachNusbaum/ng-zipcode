import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeFormComponent } from './zipcode-form.component';

describe('ZipcodeFormComponent', () => {
  let component: ZipcodeFormComponent;
  let fixture: ComponentFixture<ZipcodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
