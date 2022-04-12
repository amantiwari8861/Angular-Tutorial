import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { first } from 'rxjs/operators';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: any = {};
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  emp: any;
  loggedInEmployee: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerService.logout();
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }
  login(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.loginForm.controls.id.value);
    console.log(this.loginForm.controls.password.value);
    this.registerService.loginEmployee(this.employee).subscribe(data => {
      sessionStorage.setItem('user', this.loginForm.controls.id.value);
      window.location.reload();
      this.router.navigate(['home']);
    });
  }
}
