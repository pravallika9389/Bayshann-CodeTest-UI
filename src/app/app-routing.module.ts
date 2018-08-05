import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniqueCoursesComponent } from "./unique-courses/unique-courses.component";
import { StudentsByCoursesComponent } from "./students-by-courses/students-by-courses.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'unique-courses',
    pathMatch: 'full'
  }, {
    path: 'unique-courses',
    component: UniqueCoursesComponent
  }, {
    path: 'students-by-courses',
    component: StudentsByCoursesComponent
  }, {
    path: 'students-by-courses/:id',
    component: StudentsByCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
