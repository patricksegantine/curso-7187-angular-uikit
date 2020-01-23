import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/master/frame.page';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { LoginPageComponent } from './pages/account/login-page/login.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    CheckoutPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
