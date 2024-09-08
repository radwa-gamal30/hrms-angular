import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData={}
  loginForm:FormGroup=new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
})
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}
sendData()
{
  this.userData=this.loginForm.value;
  console.log(this.userData)
}
}
