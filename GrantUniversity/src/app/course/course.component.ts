import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  course: any = {};
  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  addCourse(courseName: string): void {
    this.router.navigate(['add']);
  }
  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course.id).subscribe();
    this.courses = this.courses.filter(c => c !== course);
  }

  updateCourse(course: Course): void {
    localStorage.removeItem('updateCourseId');
    localStorage.setItem('updateCourseId', course.id.toString());
    this.router.navigate(['update']);
  }


  ngOnInit() {
    this.courseService.getCourses().
      subscribe(data => {
        this.courses = data;
      });
  }

}
