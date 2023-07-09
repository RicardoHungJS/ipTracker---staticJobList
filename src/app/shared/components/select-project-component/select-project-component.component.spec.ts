import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectComponentComponent } from './select-project-component.component';

describe('SelectProjectComponentComponent', () => {
  let component: SelectProjectComponentComponent;
  let fixture: ComponentFixture<SelectProjectComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectProjectComponentComponent]
    });
    fixture = TestBed.createComponent(SelectProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
