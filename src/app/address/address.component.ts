import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Address } from '../address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  message=""
  a= new Address();
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

  addAddress(){
    this.service.addAddressfromRemote(this.a).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['checkout']);
        },
        error =>{
        console.log("exception occured");
      }
      )
  }
}
