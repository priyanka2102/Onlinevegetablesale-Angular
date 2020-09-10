import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  message=""
  p= new Payment()
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }
  checkout(){
    this.service.addPaymentfromRemote(this.p).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['thankyou']);
        },
        error =>{
        console.log("exception occured");
      }
      )
  }
}
