import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { AuthService } from './services/auth.service';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'carrinho', component: CartPageComponent, canActivate: [AuthService] },
      { path: 'finalizar-compra', component: CheckoutPageComponent, canActivate: [AuthService] },
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: ProfilePageComponent },
      { path: 'meus-pets', component: PetsPageComponent }
    ] 
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registrar',
    component: SignupPageComponent
  },
  {
    path: 'recuperar-senha',
    component: ResetPasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
