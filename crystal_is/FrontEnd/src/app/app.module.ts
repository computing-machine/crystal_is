import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import {InventoryRoutingModule, inventory_routing_components} from "./inventory/app-components/routing/inventory-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    inventory_routing_components
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InventoryRoutingModule,
    InventoryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
