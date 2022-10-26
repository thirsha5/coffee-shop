import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',  component:HomeComponent},
  {path:'header',  component: HeaderComponent},
  {path:'product-list',  component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
