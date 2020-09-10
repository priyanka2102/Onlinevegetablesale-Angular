import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  message=''
  c = new Customer();
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

  changepassword(){
    this.service.changepassword(this.c).subscribe(
      data=> this.router.navigate([''])
    )
  }
}
