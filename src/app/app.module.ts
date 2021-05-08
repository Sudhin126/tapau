import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-dashboard/home.component';
import { PackagesComponent } from './packages-dashboard/packages.component';
import { CustomerComponent } from './customer-dashboard/customer.component';
import { AddpackagesDashboardComponent } from './addpackages-dashboard/addpackages-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { DeliveryboysDashboardComponent } from './deliveryboys-dashboard/deliveryboys-dashboard.component';
import { ReviewsDashboardComponent } from './reviews-dashboard/reviews-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    CustomerComponent,
    AddpackagesDashboardComponent,
    DeliveryboysDashboardComponent,
    ReviewsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }