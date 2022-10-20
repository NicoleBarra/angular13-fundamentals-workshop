import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //1, render courses in a list

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 13 Intermediate',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    }
  ];

  selectedCourse = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course){
    this.selectedCourse = course;

  }

  deleteCourse(courseId){
    console.log('DELETE COURSE: ', courseId);
  }

}
