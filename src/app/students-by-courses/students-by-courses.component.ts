import { Component, OnInit } from '@angular/core';

import { AppService } from "./../app-service";

@Component({
  selector: 'app-students-by-courses',
  templateUrl: './students-by-courses.component.html',
  styleUrls: ['./students-by-courses.component.css']
})
export class StudentsByCoursesComponent implements OnInit {

  studentsList = [];
  loading = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.loading = true;
    this.appService.get('/getListOfStudents').subscribe(data => {
      this.studentsList = data;
      this.loading = false;
    },
    (error) => {
      console.log(error);
      this.loading = false;
    });
  }

}
