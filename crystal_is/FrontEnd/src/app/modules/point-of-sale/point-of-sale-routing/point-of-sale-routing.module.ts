import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from "@angular/router";

import { PointOfSaleBodyComponent } from '../components/gui-elements/point-of-sale-body/point-of-sale-body.component';
import { PointOfSaleContentComponent } from '../components/gui-elements/point-of-sale-content/point-of-sale-content.component';
import { PointOfSaleDashboardComponent } from '../components/gui-elements/point-of-sale-dashboard/point-of-sale-dashboard.component';
import { PointOfSaleSidebarComponent } from '../components/gui-elements/point-of-sale-sidebar/point-of-sale-sidebar.component';
import {SellProductComponent} from "../components/use-cases/sell-product/sell-product.component";

const point_of_sale_routes: Routes=[
  {
    path:"PointOfSale",
    component:PointOfSaleBodyComponent,
    children:[
      {
        path:"Dashboard",
        component:PointOfSaleDashboardComponent
      }
    ]
  },
  {
    path:"SellProduct",
    component:SellProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(point_of_sale_routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class PointOfSaleRoutingModule { }
export const point_of_sale_routing_components=[PointOfSaleBodyComponent, PointOfSaleContentComponent, PointOfSaleDashboardComponent,
PointOfSaleSidebarComponent, SellProductComponent];