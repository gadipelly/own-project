import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { RegisterComponent } from './Login/register/register.component';

const routes: Routes = [
  {path:'sign-in', component:SignInComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
