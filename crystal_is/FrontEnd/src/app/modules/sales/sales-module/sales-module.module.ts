import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {SalesRoutingModule, sales_routing_components} from "../sales-routing-module/sales-routing-module.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule ,
    SalesRoutingModule
  ],
  declarations: [
    sales_routing_components
  ]
})
export class SalesModuleModule { }
