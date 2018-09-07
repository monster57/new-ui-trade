import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})


const AppRoutes: Routes = [
	{
		path: '',
		component:LoginComponent
	},
	{
		path: 'signup',
		component:SignupComponent
	},
	
];


@NgModule({
	imports: [
		RouterModule.forRoot(AppRoutes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }
