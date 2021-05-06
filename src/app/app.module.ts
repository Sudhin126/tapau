import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-dashboard/home.component';
import { PackagesComponent } from './packages-dashboard/packages.component';
import { CustomerComponent } from './customer-dashboard/customer.component';
import { AddpackagesDashboardComponent } from './addpackages-dashboard/addpackages-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    CustomerComponent,
    AddpackagesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
