import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer-dashboard/customer.component';
import { HomeComponent } from './home-dashboard/home.component';
import { PackagesComponent } from './packages-dashboard/packages.component';
import { AddpackagesDashboardComponent } from './addpackages-dashboard/addpackages-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'addpackagesdashboard', component: AddpackagesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
