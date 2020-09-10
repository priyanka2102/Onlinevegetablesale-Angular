import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AdditemsComponent } from './additems/additems.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListfeedbackComponent } from './listfeedback/listfeedback.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    CartComponent,
    LogoutComponent,
    ErrorComponent,
    AdminComponent,
    AdminwelcomeComponent,
    ChangepwdComponent,
    AdminlogoutComponent,
    AdditemsComponent,
    ProductsComponent,
    FeedbackComponent,
    ListfeedbackComponent,
    CheckoutComponent,
    AddressComponent,
    ThankyouComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HttpInterceptorService,
  //   multi: true
  // }],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
