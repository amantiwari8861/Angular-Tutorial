import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoVoters } from '../models/GoVoters';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor() {

  }

  onSubmit(form: NgForm) {
      console.log(form);
  }
  ngOnInit(): void {
  }

}
