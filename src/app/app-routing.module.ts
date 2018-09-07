import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'



const AppRoutes: Routes = [
	{
		path: '',
		loadChildren:'./login/login.module#LoginModule'
	},
	{
		path: 'signup',
		component:SignupComponent
	},
	
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [],
  exports:[RouterModule]

})

export class AppRoutingModule { }
