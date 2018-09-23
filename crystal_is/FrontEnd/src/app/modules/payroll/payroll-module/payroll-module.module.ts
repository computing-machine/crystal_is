import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PayrollRoutingModule, payroll_routing_components} from "../payroll-routing/payroll-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PayrollRoutingModule
  ],
  declarations: [
    payroll_routing_components
  ]
})
export class PayrollModuleModule { }
