import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'update', component: UpdateCourseComponent },
  { path: 'add', component: AddCourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admissions', component: AdmissionComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
