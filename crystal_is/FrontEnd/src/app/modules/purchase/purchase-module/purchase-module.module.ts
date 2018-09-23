import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PurchaseRoutingModule, purchase_routing_components} from "../purchase-routing/purchase-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
  declarations: [
    purchase_routing_components
  ]
})
export class PurchaseModuleModule { }
