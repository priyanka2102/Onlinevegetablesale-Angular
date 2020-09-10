import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Products } from '../products';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  productss: Products;
  // productss = new Products();
   message=""
   id: number
   @Output()
   productDeletedEvent = new EventEmitter();
  
  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
  }

  deleteVeggies() {
    this.service.deleteVeggiesById(this.productss.id).subscribe (
      (productss) => {
        this.productDeletedEvent.emit();
        this.router.navigate(['products']);
      }
    )
  }
}
