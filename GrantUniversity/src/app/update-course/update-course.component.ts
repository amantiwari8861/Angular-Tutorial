import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: any = {};
  @Input() courses: Course[];
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      courseName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      courseEligibility: ['', Validators.required],
      courseFee: ['', Validators.required]
    });

    const id = localStorage.getItem('updateCourseId');
    if (+id > 0) {
      this.courseService.getCourseById(+id).subscribe(data => {
        this.editForm.patchValue(data);
      });
  }
  }
  getCourseById() {
    const id = localStorage.getItem('updateCourseId');
    this.courseService.getCourseById(+id).
      subscribe(data => {
        this.course = data;
      });
      console.log('Course Name is : ' + this.course.courseName);
  }
  updateCourse() {
    this.courseService.updateCourse(this.editForm.value).subscribe(data => {
      this.router.navigate(['courses']);
    },
      error => {
        alert(error);
      });
  }
  onSubmit() {
  }
}
