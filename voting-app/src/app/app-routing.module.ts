import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SingupComponent } from './singup/singup.component';
import { VotersComponent } from './voters/voters.component';

const routes: Routes = [
  {path: '', component: VotersComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'signup', component: SingupComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
