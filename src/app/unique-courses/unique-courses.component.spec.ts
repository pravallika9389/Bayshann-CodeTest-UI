import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueCoursesComponent } from './unique-courses.component';

describe('UniqueCoursesComponent', () => {
  let component: UniqueCoursesComponent;
  let fixture: ComponentFixture<UniqueCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
