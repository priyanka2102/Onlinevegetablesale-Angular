import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username=''
  password=''
  invalidlogin= false
  message="Invlid Credentials"
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

  loginadmin(){
    if(this.service.authenticate(this.username,this.password))
    {
      this.router.navigate(['adminwelcome']);
      this.invalidlogin=false;
    }
      else{
        this.invalidlogin=true;
      }
      console.log(this.username);
  }
}
