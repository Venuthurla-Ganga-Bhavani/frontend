import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListviewlistComponent } from './listviewlist/listviewlist.component';
import { EditviewComponent } from './editview/editview.component';

const routes: Routes = [
  {path:"customer",component:CustomerComponent,
children:[
  {path:"cardview",component:CardviewComponent},
  {path:"listview",component:ListviewComponent},
  {path:"mapview",component:MapviewComponent,
children:[
  {path:"customerdetails",component:CustomerdetailsComponent},
  {path:"customerorders",component:CustomerordersComponent},
  {path:"editcustomer",component:EditcustomerComponent,
children:[
  {path:"listviewlist",component:ListviewlistComponent},
  {path:"editview",component:EditviewComponent}
]
}
]
},
  {path:"newcustomer",component:NewcustomerComponent}
]
},
  {path:"order",component:OrderComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
