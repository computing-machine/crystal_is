import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { StorageServiceModule} from 'angular-webstorage-service';

//root component
import { AppComponent } from './app.component';
import { AppRoutingModule, app_routing_components } from './app-routing/app-routing.module';

//app modules
import { InventoryRoutingModule, inventory_routing_components } from "./modules/inventory/inventory-routing/inventory-routing.module";
import { PurchaseRoutingModule, purchase_routing_components } from "./modules/purchase/purchase-routing/purchase-routing.module";
import { PayrollRoutingModule, payroll_routing_components } from "./modules/payroll/payroll-routing/payroll-routing.module";
import {SalesRoutingModule, sales_routing_components} from "./modules/sales/sales-routing-module/sales-routing-module.module";



@NgModule({
  declarations: [
    AppComponent,
    app_routing_components,
    inventory_routing_components,
    purchase_routing_components,
    payroll_routing_components,
    sales_routing_components,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InventoryRoutingModule,
    PurchaseRoutingModule,
    PayrollRoutingModule,
    SalesRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StorageServiceModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
