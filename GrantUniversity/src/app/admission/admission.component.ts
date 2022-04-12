import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  employees: Employee[];
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.getEmployees().
    subscribe(data => {
      this.employees = data;
    });
  }

}
