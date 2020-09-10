import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  message=""
  p = new Products()
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }
  registerVeggies(){
    this.service.addFromRemote(this.p).subscribe(
      data=> (this.message="Adding Vegetable Successful",
      this.router.navigate(['/products'])),
      error=>this.message=error.error
    )
   }

}
