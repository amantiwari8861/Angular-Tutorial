import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:3000/courses/';
  constructor(private http: HttpClient) { }
  getCourses(): Observable<Course[]> {
     return this.http.get<Course[]>(this.baseUrl);
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + '/' + id);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + '/' + course.id, course);
  }

  deleteCourse(courseId: number): Observable<Course> {
    return this.http.delete<Course>(this.baseUrl + '/' + courseId);
  }
}
