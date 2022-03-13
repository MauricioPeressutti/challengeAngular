import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './items/list/list.component';
import { LoginComponent } from './login/login.component';
import { SecondListComponent } from './second-items/second-list/second-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'list', component: ListComponent},
  {path:'second-list', component: SecondListComponent},
  {path:'addProduct', component: AddProductComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
