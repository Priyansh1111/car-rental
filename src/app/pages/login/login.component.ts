import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  loginForm: FormGroup = new FormGroup({   
        userName: new FormControl(""),
        password: new FormControl("")
  })
    
  router = inject(Router)
  
  onLogin() {
    debugger; 
    const loginObj = this.loginForm.value;
      if(loginObj.userName =="Admin" && loginObj.password =="112233"){
      this.router.navigateByUrl("/dashboard")
      }else{
        alert("Login Details Are Wrong")
      }
    }
}

export class LoginUser{
  userName: string;
  password:string;

  constructor() {
    this.userName = '';
    this.password = '';

  }
}
function inject(Router: (options?: import("express").RouterOptions | undefined) => import("express-serve-static-core").Router) {
  throw new Error('Function not implemented.');
}

