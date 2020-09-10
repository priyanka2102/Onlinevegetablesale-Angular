import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Admin } from '../admin';
import { map } from 'rxjs/operators';
import { Products } from '../products';
import { Feedback } from '../feedback';
import { Address } from '../address';
import { Payment } from '../payment';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  p = new Products();
  c = new Customer();
//  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  username : String
  password : String 

  constructor(private http : HttpClient) { }

  public loginuserFromRemote(cust: Customer):Observable<Customer>{
     return this.http.post<Customer>('http://localhost:8095/api/customer/login',cust);
  }

  public registerFromRemote(cust: Customer):Observable<Customer>{
    return this.http.post<Customer>('http://localhost:8095/api/customer/register',cust);
}
public addFromRemote(prod: Products):Observable<Products>{
  return this.http.post<Products>('http://localhost:8095/api/admin/addveggies',prod);
}

// public loginAdmin(adm:Admin):Observable<Admin>{
//     return this.http.post<Admin>('http://localhost:8095/api/admin/login',adm);
// }
public changepassword(cust: Customer):Observable<Customer>{
  return this.http.post<Customer>('http://localhost:8095/api/customer/update',cust)
}

authenticate (username, password){
  //console.log('before'+ this.isUserLoggedIn())
  if(username==='sidshekh' && password==='Sid@kk2103')
  {
    sessionStorage.setItem('authenticaterUser',username);
   // console.log('after'+ this.isUserLoggedIn())
    return true;
  }
  else
  {
    return false;
  }
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUser')
  return !(user === null)
}

logout(){
  sessionStorage.removeItem('authenticaterUser')
}
isCustomerLoggedIn(){
  let user = sessionStorage.getItem('username')
  return !(user === null)
}

customerlogout(){
  sessionStorage.removeItem('username')
}

retrieveAllCustomers(username){
    return this.http.get<Customer>('http://localhost:8095/api/admin/allcustomers');
  }

retriveAllVegetables(username){
  return this.http.get<Products>('http://localhost:8095/api/admin/allproducts');
}

retriveAllVeggies(){
  return this.http.get<Products>('http://localhost:8095/api/customer/getAll')
}

deleteVeggiesById(id){
  return this.http.delete<Products>('http://localhost:8095/api/admin/allproducts/delete/'+id);
}

public feedbackUserFromRemote(feedback :Feedback):Observable<Customer>{
    
  return this.http.post<any>("http://localhost:8095/api/customer/"+sessionStorage.getItem('username')+"/comments",feedback)
}

viewfeedbacks(username)
{
  return this.http.get<Feedback>('http://localhost:8095/api/admin/allfeedbacks');
}

public addAddressfromRemote(address: Address):Observable<Customer>{
  return this.http.post<any>("http://localhost:8095/api/customer/"+sessionStorage.getItem('username')+"/address",address);
}
public addPaymentfromRemote(payment: Payment):Observable<Customer>{
  return this.http.post<any>("http://localhost:8095/api/customer/"+sessionStorage.getItem('username')+"/payment",payment);
}
}