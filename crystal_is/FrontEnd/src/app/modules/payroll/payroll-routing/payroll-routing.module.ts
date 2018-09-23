import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';

import {PayrollContentComponent} from "../components/gui-elements/payroll-content/payroll-content.component";
import {PayrollSidebarComponent} from "../components/gui-elements/payroll-sidebar/payroll-sidebar.component";
import {PayrollDashboardComponent} from "../components/gui-elements/payroll-dashboard/payroll-dashboard.component";

const payroll_routes:Routes =[
  {
    path:"Payroll",
    component:PayrollDashboardComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(payroll_routes)
  ],
  declarations: []
})
export class PayrollRoutingModule { }
export const payroll_routing_components=[PayrollContentComponent, PayrollSidebarComponent, PayrollDashboardComponent];
