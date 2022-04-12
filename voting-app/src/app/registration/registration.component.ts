import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoVotersService } from '../services/go-voters.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  
  constructor(private http: GoVotersService) { }

  ngOnInit(): void {
     this.registrationForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required), 
      'age': new FormControl(null, Validators.required),
      'fatherName': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'aadharNumber': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]), // Use an array for more than 1 validator
      'phoneNumber': new FormControl(null, Validators.required)

     });
  }

  onSubmit() {
    this.http.addVoter(this.registrationForm.value).subscribe(data => {
      console.log('Added Successfully', data);
    });
    console.log(this.registrationForm);
  }
}
