import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit {

  customerss : Customer;
  message:String
  //c= new Customer();
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
    this.refreshCustomers();
  }

  refreshCustomers(){
    this.service.retrieveAllCustomers('sidshekh').subscribe(
      response => {
        console.log(response);
        this.customerss = response;
      }
    )
  }

}
