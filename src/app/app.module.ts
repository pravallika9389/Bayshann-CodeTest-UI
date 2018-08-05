import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniqueCoursesComponent } from './unique-courses/unique-courses.component';
import { StudentsByCoursesComponent } from './students-by-courses/students-by-courses.component';
import { AppService } from './app-service';

@NgModule({
  declarations: [
    AppComponent,
    UniqueCoursesComponent,
    StudentsByCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
