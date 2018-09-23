import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes , Router} from '@angular/router';

import { SearchPurchaseOrderComponent } from '../components/use-cases/ViewPurchaseOrder/search-purchase-order/search-purchase-order.component';
import {PurchaseSidebarComponent} from "../components/gui-elements/purchase-sidebar/purchase-sidebar.component";
import { ViewPurchaseOrderDetailComponent } from '../components/use-cases/ViewPurchaseOrder/view-purchase-order-detail/view-purchase-order-detail.component';
import { DetailTableComponent } from '../components/gui-elements/detail-table/detail-table.component';
import { PaymentTableComponent } from '../components/gui-elements/payment-table/payment-table.component';
import { ViewVendorComponent } from '../components/use-cases/view-vendor/view-vendor.component';
import { AddVendorComponent } from '../components/use-cases/add-vendor/add-vendor.component';
import { AddPurchaseOrderComponent } from '../components/use-cases/add-purchase-order/add-purchase-order.component';
import { ReportPurchasesFromVendorsComponent } from '../components/use-cases/report-purchases-from-vendors/report-purchases-from-vendors.component';
import { ReportPaymentsMadeComponent } from '../components/use-cases/report-payments-made/report-payments-made.component';
import { ReportVendorBalancesComponent } from '../components/use-cases/report-vendor-balances/report-vendor-balances.component';
import { ReportPOstatusComponent } from "../components/use-cases/report-postatus/report-postatus.component";
import {PurchaseDashboardComponent} from "../components/gui-elements/purchase-dashboard/purchase-dashboard.component";
import {PurchaseContentComponent} from "../components/gui-elements/purchase-content/purchase-content.component";

const purchase_routes:Routes =[
  {
    path:"Purchase",
    component:PurchaseDashboardComponent,
    children:[
      {path :'ViewVendors',component: ViewVendorComponent },
      {path: 'AddVendor',component:AddVendorComponent},
      {path:'AddPurchaseOrder',component:AddPurchaseOrderComponent},
      {path : 'ReportPurchasesFromVendors',component:ReportPurchasesFromVendorsComponent},
      {path : 'ReportPaymentMade',component:ReportPaymentsMadeComponent},
      {path : 'ReportVendorBalances',component:ReportVendorBalancesComponent},
      {path :'ReportPOStatus',component:ReportPOstatusComponent},
      {path:'PurchaseSidebar',component: PurchaseSidebarComponent},
      {path:"PurchaseOrders", component:SearchPurchaseOrderComponent},
      {path:"PurchaseOrder/:id", component:ViewPurchaseOrderDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(purchase_routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class PurchaseRoutingModule { }
export const purchase_routing_components=[SearchPurchaseOrderComponent,PurchaseSidebarComponent,ViewPurchaseOrderDetailComponent,
  DetailTableComponent,PaymentTableComponent,ViewVendorComponent,AddVendorComponent,AddPurchaseOrderComponent,
  ReportPurchasesFromVendorsComponent,ReportPaymentsMadeComponent,ReportVendorBalancesComponent,ReportPOstatusComponent,
   PurchaseDashboardComponent, PurchaseContentComponent];