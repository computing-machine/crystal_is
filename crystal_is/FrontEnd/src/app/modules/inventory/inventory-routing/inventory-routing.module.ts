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
import { SearchUnitComponent } from '../components/use-cases/inspect-unit/search-unit/search-unit.component';
import { RetrieveUnitDetailComponent } from '../components/use-cases/inspect-unit/retrieve-unit-detail/retrieve-unit-detail.component';
import { RegisterUnitComponent } from '../components/use-cases/register-unit/register-unit.component';
import { UpdateUnitComponent } from '../components/use-cases/update-unit/update-unit.component';
import { DeactivateUnitComponent } from '../components/use-cases/deactivate-unit/deactivate-unit.component';
import { RetrieveActiveUnitDetailComponent } from '../components/use-cases/inspect-active-unit/retrieve-active-unit-detail/retrieve-active-unit-detail.component';
import { SearchActiveUnitComponent } from '../components/use-cases/inspect-active-unit/search-active-unit/search-active-unit.component';
import { SearchInactiveUnitComponent } from '../components/use-cases/inspect-inactive-unit/search-inactive-unit/search-inactive-unit.component';
import { RetrieveInactiveUnitDetailComponent } from '../components/use-cases/inspect-inactive-unit/retrieve-inactive-unit-detail/retrieve-inactive-unit-detail.component';
import { ActivateUnitComponent } from '../components/use-cases/activate-unit/activate-unit.component';
import { UpdateRawMaterialComponent } from '../components/use-cases/update-raw-material/update-raw-material.component';
import { DeactivateRawMaterialComponent } from '../components/use-cases/deactivate-raw-material/deactivate-raw-material.component';
import { UpdateIntermediaryComponent } from '../components/use-cases/update-intermediary/update-intermediary.component';
import { DeactivateIntermediaryComponent } from '../components/use-cases/deactivate-intermediary/deactivate-intermediary.component';
import { DeactivateFinishedGoodComponent } from '../components/use-cases/deactivate-finished-good/deactivate-finished-good.component';
import { UpdateFinishedGoodComponent } from '../components/use-cases/update-finished-good/update-finished-good.component';
import { InventoryBodyComponent } from '../components/gui-elements/inventory-body/inventory-body.component';
import { SearchSalesOrderComponent } from '../components/use-cases/inspect-sales-order/search-sales-order/search-sales-order.component';
import { RetrieveSalesOrderDetailComponent } from '../components/use-cases/inspect-sales-order/retrieve-sales-order-detail/retrieve-sales-order-detail.component';
import { SearchNonProcessLineItemComponent } from '../components/use-cases/inspect-non-process-line-item/search-non-process-line-item/search-non-process-line-item.component';
import { RetrieveNonProcessLineItemDetailComponent } from '../components/use-cases/inspect-non-process-line-item/retrieve-non-process-line-item-detail/retrieve-non-process-line-item-detail.component';
import { RegisterNonProcessLineItemComponent } from '../components/use-cases/register-non-process-line-item/register-non-process-line-item.component';
import { UpdateNonProcessLineItemComponent } from '../components/use-cases/update-non-process-line-item/update-non-process-line-item.component';

const inventory_routes: Routes=[
  {
    path:"Inventory",
    component:InventoryBodyComponent,
    children:[
      {
        path:"Dashboard",
        component:InventoryDashboardComponent
      },
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
        path:"NonProcessLineItems",
        component:SearchNonProcessLineItemComponent,
      },
      {
        path:"NonProcessLineItem/:id",
        component:RetrieveNonProcessLineItemDetailComponent,
      },
      {
        path:"RawMaterials/NewItem",
        component:AddItemComponent,
      },
      {
        path:"NewItem",
        component:AddItemComponent,
      },
      {
        path:"ActiveUnits",
        component:SearchActiveUnitComponent,
      },
      {
        path:"ActiveUnit/:id",
        component:RetrieveActiveUnitDetailComponent,
      },
      {
        path:"InactiveUnits",
        component:SearchInactiveUnitComponent,
      },
      {
        path:"InactiveUnit/:id",
        component:RetrieveInactiveUnitDetailComponent,
      },
      {
        path:"NewUnit",
        component:RegisterUnitComponent,
      },
      {
        path:"UpdateUnit/:id",
        component:UpdateUnitComponent,
      },
      {
        path:"RawMaterials/AddRawMaterial",
        component:AddRawMaterialComponent,
      },
      {
        path:"Intermediarys/AddIntermediary",
        component:AddIntermediaryComponent,
      },
      {
        path:"FinishedGoods/AddFinishedGood",
        component:AddFinishedGoodComponent,
      },
      {
        path:"NonProcessLineItems/RegisterNonProcessLineItem",
        component:RegisterNonProcessLineItemComponent,
      },
      {
        path:"UpdateRawMaterial/:id",
        component:UpdateRawMaterialComponent,
      },
      {
        path:"UpdateIntermediary/:id",
        component:UpdateIntermediaryComponent
      },
      {
        path:"UpdateFinishedGood/:id",
        component:UpdateFinishedGoodComponent
      },
      {
        path:"UpdateNonProcessLineItem/:id",
        component:UpdateNonProcessLineItemComponent
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
export const inventory_routing_components=[RetrieveNonProcessLineItemDetailComponent,SearchNonProcessLineItemComponent,RetrieveSalesOrderDetailComponent,SearchSalesOrderComponent,InventoryBodyComponent,UpdateRawMaterialComponent,DeactivateRawMaterialComponent,UpdateIntermediaryComponent,DeactivateIntermediaryComponent,
  UpdateFinishedGoodComponent,DeactivateFinishedGoodComponent,ActivateUnitComponent,SearchInactiveUnitComponent,RetrieveInactiveUnitDetailComponent,SearchActiveUnitComponent,
  RetrieveActiveUnitDetailComponent,DeactivateUnitComponent,UpdateUnitComponent,RegisterUnitComponent,RetrieveUnitDetailComponent,SearchUnitComponent,
  AddFinishedGoodComponent,AddIntermediaryComponent,AddItemComponent,AddRawMaterialComponent,InventorySidebarComponent,InventoryContentComponent,SearchFinishedGoodComponent, ViewFinishedGoodDetailComponent,
  SearchRawMaterialComponent,ViewRawMaterialDetailComponent,SearchIntermediaryComponent,ViewIntermediaryDetailComponent, InventoryDashboardComponent];
