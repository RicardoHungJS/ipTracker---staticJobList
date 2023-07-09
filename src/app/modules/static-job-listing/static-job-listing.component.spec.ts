import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticJobListingComponent } from './static-job-listing.component';

describe('StaticJobListingComponent', () => {
  let component: StaticJobListingComponent;
  let fixture: ComponentFixture<StaticJobListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticJobListingComponent]
    });
    fixture = TestBed.createComponent(StaticJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
