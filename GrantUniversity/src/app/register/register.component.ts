import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    employee: any;
    registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) {
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      empEmailId: ['', Validators.required],
      password: ['', Validators.required],
      empName: ['', Validators.required],
      empDepartment: ['', Validators.required],
      empLocation: ['', Validators.required],
      yearsOfExp: ['', Validators.required],
      studentTaught: ['', Validators.required],
      managerId: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  addEmployee() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerService.registerEmployee(this.registerForm.value)
      .subscribe(data => {
        console.log('Employee Registered');
        this.router.navigate(['login']);
      },
      error => {
        alert(error);
      });
  }

}
