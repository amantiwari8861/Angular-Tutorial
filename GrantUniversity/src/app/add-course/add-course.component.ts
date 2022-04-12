import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  @Input() courses: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  addForm: FormGroup;
  course: any;
  submitted = false;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      courseName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      courseEligibility: ['', Validators.required],
      courseFee: ['', Validators.required]
    });

  }
  addCourse() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.courseService.createCourse(this.addForm.value)
      .subscribe(data => {
        console.log('Create fire');
        this.router.navigate(['courses']);
      },
      error => {
        alert(error);
      });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addForm.value);
  }
}
