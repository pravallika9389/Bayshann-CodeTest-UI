import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsByCoursesComponent } from './students-by-courses.component';

describe('StudentsByCoursesComponent', () => {
  let component: StudentsByCoursesComponent;
  let fixture: ComponentFixture<StudentsByCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsByCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsByCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
