import { Component, OnInit } from '@angular/core';

import { AppService } from "./../app-service";

@Component({
  selector: 'app-unique-courses',
  templateUrl: './unique-courses.component.html',
  styleUrls: ['./unique-courses.component.css']
})
export class UniqueCoursesComponent implements OnInit {

  subjectList = [];
  loading = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getSubjectList();
  }

  getSubjectList() {
    this.loading = true;
    this.appService.get('/getUniqueCourses').subscribe(data => {
      console.log(data);
      this.subjectList = data[0].c12;
      this.loading = false;
    }, 
    (error) => {
      console.log(error);
      this.loading = false;
    })
  }

}
