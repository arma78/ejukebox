import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRequestsComponent } from './song-requests.component';

describe('SongRequestsComponent', () => {
  let component: SongRequestsComponent;
  let fixture: ComponentFixture<SongRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
