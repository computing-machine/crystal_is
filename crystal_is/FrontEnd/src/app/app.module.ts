import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";

//root component
import { AppComponent } from './app.component';

//app modules
import { InventoryRoutingModule, inventory_routing_components } from "./modules/inventory/inventory-routing/inventory-routing.module";
import { PurchaseRoutingModule, purchase_routing_components } from "./modules/purchase/purchase-routing/purchase-routing.module";
import { AppRoutingModule, app_routing_components } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    app_routing_components,
    inventory_routing_components,
    purchase_routing_components
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InventoryRoutingModule,
    PurchaseRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
