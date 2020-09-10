import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../services/registration.service';
import { Products } from '../products';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  prod : Products
  isLoggedIn = false;
  username=''
  p = new Products
  c = new Customer();
  constructor(private route:ActivatedRoute,private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    this.username= this.route.snapshot.params['username']
    this.refreshVeggies();
  }

  refreshVeggies(){
    this.service.retriveAllVeggies().subscribe(
      response => {
        console.log(response);
        this.prod = response;
      }
    )
  }


}

