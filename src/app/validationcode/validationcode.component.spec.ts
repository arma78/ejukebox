import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationcodeComponent } from './validationcode.component';

describe('ValidationcodeComponent', () => {
  let component: ValidationcodeComponent;
  let fixture: ComponentFixture<ValidationcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
