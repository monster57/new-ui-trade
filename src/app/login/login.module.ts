import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, 
		MatCommonModule,
		MatSlideToggleModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		MatCheckboxModule
	} from '@angular/material';





const LoginRoutes: Routes = [
	{
		path: '',
		component:LoginComponent
	}
	
];
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    RouterModule.forChild(LoginRoutes)
  ],

  declarations: [LoginComponent],
  exports:[RouterModule]
})

export class LoginModule { }
