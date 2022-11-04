import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListviewlistComponent } from './listviewlist/listviewlist.component';
import { EditviewComponent } from './editview/editview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    OrderComponent,
    AboutComponent,
    LoginComponent,
    CardviewComponent,
    ListviewComponent,
    MapviewComponent,
    NewcustomerComponent,
    CustomerdetailsComponent,
    CustomerordersComponent,
    EditcustomerComponent,
    ListviewlistComponent,
    EditviewComponent
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
