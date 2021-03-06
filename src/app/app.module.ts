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
import { ServiceService } from './service/customer.service';
import { DeliveryboysDashboardComponent } from './deliveryboys-dashboard/deliveryboys-dashboard.component';
import { ReviewsDashboardComponent } from './reviews-dashboard/reviews-dashboard.component';
import { DeliveryboysService } from './service/deliveryboys.service';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    CustomerComponent,
    AddpackagesDashboardComponent,
    DeliveryboysDashboardComponent,
    ReviewsDashboardComponent,
    OrdersComponent,
    TransactionsComponent,
    DashboardMainComponent,
    DemoComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule
  ],
  providers: [ServiceService,
    DeliveryboysService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
