import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoVoters } from '../models/GoVoters';

@Injectable({
  providedIn: 'root'
})
export class GoVotersService {

  baseUrl = 'http://localhost:9090/api/voting/voters';
  constructor(private http: HttpClient) { }
  
  getVoters(): Observable<GoVoters[]> {
     return this.http.get<GoVoters[]>(this.baseUrl);
  }
  addVoter(goVoter: GoVoters): Observable<GoVoters> {
     return this.http.post<GoVoters>(this.baseUrl, goVoter);
  }
  getVoterById(id: number) {

  }

  updateVoter(goVoter: GoVoters) {

  }
  deleteVoter(id: number) {

  }
}
