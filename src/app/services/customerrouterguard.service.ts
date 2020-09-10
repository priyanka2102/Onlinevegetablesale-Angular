import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerrouterguardService {

  constructor(private router:Router,private service:RegistrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.service.isCustomerLoggedIn())
    {
    return true;
    this.router.navigate([''])
    }
  else
  {
    return false;
  }
}
}
