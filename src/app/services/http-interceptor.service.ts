import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private service: RegistrationService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (this.service.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
//         const authReq = req.clone({
//             headers: new HttpHeaders({
//                 'Content-Type': 'application/json',
//                 'Authorization': `Basic ${window.btoa(this.service.username + ":" + this.service.password)}`
//             })
//         });
//         return next.handle(authReq);
//     } else {
//         return next.handle(req);
//     }
// }
}
