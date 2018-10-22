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
import {PointOfSaleRoutingModule, point_of_sale_routing_components} from "./modules/point-of-sale/point-of-sale-routing/point-of-sale-routing.module";
import { RegisterNonProcessLineItemComponent } from './modules/inventory/components/use-cases/register-non-process-line-item/register-non-process-line-item.component';
import { UpdateNonProcessLineItemComponent } from './modules/inventory/components/use-cases/update-non-process-line-item/update-non-process-line-item.component';
import { DeactivateNonProcessLineItemComponent } from './modules/inventory/components/use-cases/deactivate-non-process-line-item/deactivate-non-process-line-item.component';

@NgModule({
  declarations: [
    AppComponent,
    app_routing_components,
    inventory_routing_components,
    purchase_routing_components,
    payroll_routing_components,
    sales_routing_components,
    point_of_sale_routing_components,
    RegisterNonProcessLineItemComponent,
    UpdateNonProcessLineItemComponent,
    DeactivateNonProcessLineItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InventoryRoutingModule,
    PurchaseRoutingModule,
    PayrollRoutingModule,
    SalesRoutingModule,
    PointOfSaleRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StorageServiceModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
