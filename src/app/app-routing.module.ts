import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { combineLatest } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { RouteguardService } from './services/routeguard.service';
import { CustomerrouterguardService } from './services/customerrouterguard.service'
import { AdditemsComponent } from './additems/additems.component';
import { ProductsComponent } from'./products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListfeedbackComponent } from './listfeedback/listfeedback.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'welcome', component: WelcomeComponent, canActivate:[CustomerrouterguardService]},
  {path:'changepwd', component:ChangepwdComponent, canActivate:[CustomerrouterguardService]},
  { path:'register', component:RegisterComponent},
  { path:'cart', component:CartComponent, canActivate:[CustomerrouterguardService]},
  { path:'address', component:AddressComponent, canActivate:[CustomerrouterguardService]},
  { path:'checkout', component:CheckoutComponent, canActivate:[CustomerrouterguardService]},
  { path:'listfeedback', component:ListfeedbackComponent, canActivate:[CustomerrouterguardService]},
  { path:'thankyou', component:ThankyouComponent, canActivate:[CustomerrouterguardService]},
  { path:'logout',component:LogoutComponent},
  { path:'admin', component:AdminComponent},
  { path:'adminwelcome', component:AdminwelcomeComponent, canActivate:[RouteguardService]},
  { path:'feedbacks', component:FeedbackComponent, canActivate:[RouteguardService]},
  { path:'products', component: ProductsComponent, canActivate:[RouteguardService]},
  { path:'view', component:ViewComponent,canActivate:[RouteguardService]},
  { path:'additems', component:AdditemsComponent, canActivate:[RouteguardService]},
  { path:'adminlogout', component:AdminlogoutComponent},
  { path:'**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
