import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService} from '../services/registration.service';
import { Customer } from '../customer';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message=''
  username=""
  invalidLogin= false

  password=""

   c = new Customer();
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    this.service.loginuserFromRemote(this.c).subscribe(
      data=>{ 
        sessionStorage.setItem('username',this.c.username)
      this.router.navigate(['welcome'])
     // console.log("Username is"+ this.c.username)
    },
      err=> 
    this.message="Bad Cresentials... Enter Valid Details")
  }
}
