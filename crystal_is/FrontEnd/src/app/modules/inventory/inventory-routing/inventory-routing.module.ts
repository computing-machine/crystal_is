import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from "@angular/router";

import { AddRawMaterialComponent } from '../components/use-cases/add-raw-material/add-raw-material.component';
import {SearchFinishedGoodComponent} from "../components/use-cases/view-finished-good/search-finished-good/search-finished-good.component";
import {ViewFinishedGoodDetailComponent} from "../components/use-cases/view-finished-good/view-finished-good-detail/view-finished-good-detail.component";
import {SearchRawMaterialComponent} from "../components/use-cases/view-raw-material/search-raw-material/search-raw-material.component";
import {ViewRawMaterialDetailComponent} from "../components/use-cases/view-raw-material/view-raw-material-detail/view-raw-material-detail.component";
import {SearchIntermediaryComponent} from "../components/use-cases/view-intermediary/search-intermediary/search-intermediary.component";
import {ViewIntermediaryDetailComponent} from "../components/use-cases/view-intermediary/view-intermediary-detail/view-intermediary-detail.component";
import { InventorySidebarComponent } from '../components/gui-elements/inventory-sidebar/inventory-sidebar.component';
import { InventoryContentComponent } from '../components/gui-elements/inventory-content/inventory-content.component';
import { InventoryDashboardComponent } from '../components/gui-elements/inventory-dashboard/inventory-dashboard.component';
import { AddItemComponent } from '../components/use-cases/add-item/add-item.component';
import { AddIntermediaryComponent } from '../components/use-cases/add-intermediary/add-intermediary.component';
import { AddFinishedGoodComponent } from '../components/use-cases/add-finished-good/add-finished-good.component';

const inventory_routes: Routes=[
  {
    path:"Inventory",
    component:InventoryDashboardComponent,
    children:[
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
        component:SearchRawMaterialComponent
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
      },
      {
        path:"RawMaterials/NewItem",
        component:AddItemComponent,
      },
      {
        path:"NewItem",
        component:AddItemComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inventory_routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class InventoryRoutingModule { }
export const inventory_routing_components=[AddFinishedGoodComponent,AddIntermediaryComponent,AddItemComponent,AddRawMaterialComponent,InventorySidebarComponent,InventoryContentComponent,SearchFinishedGoodComponent, ViewFinishedGoodDetailComponent,
  SearchRawMaterialComponent,ViewRawMaterialDetailComponent,SearchIntermediaryComponent,ViewIntermediaryDetailComponent, InventoryDashboardComponent];
