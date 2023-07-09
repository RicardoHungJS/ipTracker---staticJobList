import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOptionCardComponent } from './job-option-card.component';

describe('JobOptionCardComponent', () => {
  let component: JobOptionCardComponent;
  let fixture: ComponentFixture<JobOptionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOptionCardComponent]
    });
    fixture = TestBed.createComponent(JobOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
