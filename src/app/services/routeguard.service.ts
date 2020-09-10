import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService {

  constructor(private router:Router,private service:RegistrationService) {}
   
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.service.isUserLoggedIn())
    {
    return true;
    this.router.navigate(['/admin'])
    }
  else
  {
    return false;
  }
}
}
