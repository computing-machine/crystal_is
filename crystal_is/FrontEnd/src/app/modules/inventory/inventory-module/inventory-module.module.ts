import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InventoryRoutingModule, inventory_routing_components} from "../inventory-routing/inventory-routing.module";

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [
    inventory_routing_components
  ]
})
export class InventoryModuleModule { }
