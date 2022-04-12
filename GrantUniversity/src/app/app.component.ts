import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'GrantUniversity';
  today = new Date();
  jstoday = '';
  loggedInUser: any;
  user: number;
  mynumber: any;
  constructor(private router: Router) {
    this.jstoday = formatDate(this.today, 'MMM dd, yyyy , hh:mm:ss a', 'en-US', '+0530');
    this.mynumber = +911234567890;
  }
  ngOnInit(): void {
     this.loggedInUser = sessionStorage.getItem('user');
  }
  logout() {
    this.loggedInUser = null;
    this.router.navigate(['login']);
  }
}
