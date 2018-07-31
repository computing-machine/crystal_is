import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from "@angular/router";

import {SidebarComponent} from "../gui-elements/sidebar/sidebar.component";
import {ContentComponent} from "../gui-elements/content/content.component";
import {SearchFinishedGoodComponent} from "../use-cases/view-finished-good/search-finished-good/search-finished-good.component";
import {ViewFinishedGoodDetailComponent} from "../use-cases/view-finished-good/view-finished-good-detail/view-finished-good-detail.component";
import {SearchRawMaterialComponent} from "../use-cases/view-raw-material/search-raw-material/search-raw-material.component";
import {ViewRawMaterialDetailComponent} from "../use-cases/view-raw-material/view-raw-material-detail/view-raw-material-detail.component";
import {SearchIntermediaryComponent} from "../use-cases/view-intermediary/search-intermediary/search-intermediary.component";
import {ViewIntermediaryDetailComponent} from "../use-cases/view-intermediary/view-intermediary-detail/view-intermediary-detail.component";

const routes: Routes=[
  {
    path:"FinishedGoods",
    component:SearchFinishedGoodComponent
  },
  {
    path:"FinishedGood/:id",
    component:ViewFinishedGoodDetailComponent,
  },
  {
    path:"RawMaterials",
    component:SearchRawMaterialComponent,
  },
  {
    path:"RawMaterial/:id",
    component:ViewRawMaterialDetailComponent,
  },
  {
    path:"Intermediarys",
    component:SearchIntermediaryComponent,
  },
  {
    path:"Intermediary/:id",
    component:ViewIntermediaryDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class InventoryRoutingModule { }
export const inventory_routing_components=[SidebarComponent,ContentComponent,SearchFinishedGoodComponent, ViewFinishedGoodDetailComponent,
  SearchRawMaterialComponent,ViewRawMaterialDetailComponent,SearchIntermediaryComponent,ViewIntermediaryDetailComponent];
