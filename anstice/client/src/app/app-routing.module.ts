import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/users/login/login.component';
import { SignUpComponent } from './components/users/sign-up/sign-up.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ViewAllProductsComponent } from './components/products/view-all-products/view-all-products.component';
import { ViewByProductNameComponent } from './components/products/view-by-product-name/view-by-product-name.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'add-products', component: AddProductComponent },
  { path: 'view-all', component: ViewAllProductsComponent },
  { path: 'view-by-name', component: ViewByProductNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
