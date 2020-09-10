import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService} from '../services/registration.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name: String
  // username: String
  // email: String
  // password: String
  msg=''
  c = new Customer();
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

   registerUser(){
    this.service.registerFromRemote(this.c).subscribe(
      data=> (this.msg="Registration Successful",
      this.router.navigate([''])),
      error=>this.msg=error.error
    )
   }

}
