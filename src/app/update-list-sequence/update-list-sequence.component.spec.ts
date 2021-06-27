import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListSequenceComponent } from './update-list-sequence.component';

describe('UpdateListSequenceComponent', () => {
  let component: UpdateListSequenceComponent;
  let fixture: ComponentFixture<UpdateListSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
