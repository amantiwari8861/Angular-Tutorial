import { Component, OnInit } from '@angular/core';
import { GoVoters } from '../models/GoVoters';
import { GoVotersService } from '../services/go-voters.service';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {

  voters!: GoVoters[]; 
  constructor(private http: GoVotersService) { }

  ngOnInit(): void {
    this.http.getVoters().subscribe(data => {
      this.voters = data;
    });
  }

}
