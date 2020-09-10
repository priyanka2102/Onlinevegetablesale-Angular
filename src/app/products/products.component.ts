import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from '../products';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productss: Products;
 // productss = new Products();
  message=""
  id: number
  c = new Customer();
  @Output()
  productDeletedEvent = new EventEmitter();
  action: string;
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems(){
    this.service.retriveAllVegetables('sidshekh').subscribe(
      response => {
        console.log(response);
        this.productss = response;
      }
    )
  }
  viewVeggies(id: number) {
    this.router.navigate(['view'], { queryParams: { id, action: 'view' } });
  }
}
