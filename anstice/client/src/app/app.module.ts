import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { ViewAllProductsComponent } from './components/products/view-all-products/view-all-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ViewByProductNameComponent } from './components/products/view-by-product-name/view-by-product-name.component';
import { SignUpComponent } from './components/users/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewAllProductsComponent,
    AddProductComponent,
    ViewByProductNameComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
