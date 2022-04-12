import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    UpdateCourseComponent,
    AddCourseComponent,
    HomeComponent,
    AdmissionComponent,
    ContactComponent,
    PhonePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourseService, RegisterService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
