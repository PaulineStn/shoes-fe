import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
