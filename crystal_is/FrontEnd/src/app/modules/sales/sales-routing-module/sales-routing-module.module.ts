import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from "@angular/router";

import { EstimateDetailComponent } from '../components/use-cases/viewEstimate/estimate-detail/estimate-detail.component';
import { SearchCustomerComponent } from '../components/use-cases/viewCustomer/search-customer/search-customer.component';
import { CustomerDetailComponent } from '../components/use-cases/viewCustomer/customer-detail/customer-detail.component';
import { SearchConfirmedSOComponent } from '../components/use-cases/viewConfirmedSO/search-confirmed-so/search-confirmed-so.component';
import { ConfirmedOrderDetailComponent } from '../components/use-cases/viewConfirmedSO/confirmed-order-detail/confirmed-order-detail.component';
import { SearchDeliveredSOComponent } from '../components/use-cases/viewDeliveredSO/search-delivered-so/search-delivered-so.component';
import { DeliveredSODetailComponent } from '../components/use-cases/viewDeliveredSO/delivered-sodetail/delivered-sodetail.component';
import { ReadySODetailComponent } from '../components/use-cases/viewReadySO/ready-sodetail/ready-sodetail.component';
import { SearchReadySOComponent } from '../components/use-cases/viewReadySO/search-ready-so/search-ready-so.component';
import { SOInProductionDetailComponent } from '../components/use-cases/viewSOInProduction/soin-production-detail/soin-production-detail.component';
import { SearchSOInProductionComponent } from '../components/use-cases/viewSOInProduction/search-soin-production/search-soin-production.component';
import {SearchEstimateComponent} from '../components/use-cases/viewEstimate/search-estimate/search-estimate.component';
import {RegisterCustomerComponent} from '../components/use-cases/registerEstimate/register-customer/register-customer.component';
import { ResgisterEstimateComponent } from '../components/use-cases/registerEstimate/resgister-estimate/resgister-estimate.component';
import { SearchCusComponent } from '../components/use-cases/registerEstimate/search-cus/search-cus.component';
import {OrderDetailComponent } from '../components/use-cases/viewOrders/order-detail/order-detail.component';
import { ConfirmEstimateComponent } from '../components/use-cases/confirm-estimate/confirm-estimate.component';
import { SalesSidebarComponent } from '../components/gui-elements/sales-sidebar/sales-sidebar.component';
import { SalesContentComponent } from '../components/gui-elements/sales-content/sales-content.component';
import { SalesDashboardComponent } from '../components/gui-elements/sales-dashboard/sales-dashboard.component';
import { UpdateCustomerComponent} from '../components/use-cases/update-customer/update-customer.component'
import {DeleteCustomerComponent} from '../components/use-cases/delete-customer/delete-customer.component'
import { TestFormComponent } from '../components/use-cases/test-form/test-form.component';
import { UpdateEstimateComponent } from '../components/use-cases/update-estimate/update-estimate.component';

const sales_routes: Routes = [
  {
    path:"Sales",
    component:SalesDashboardComponent,
    children:[
      {
        path:'viewestimates',
        component : SearchEstimateComponent
      },
      {
        path:'ConfirmOrder',
        component : SearchConfirmedSOComponent
      },
      {
        path:'deliveredOrder',
        component : SearchDeliveredSOComponent
      },
      {
        path:'orderInProduction',
        component :SearchSOInProductionComponent
      },
      {
        path:'readyOrder',
        component :SearchReadySOComponent
      },
      {
        path : 'registerEstimate/:id',
        component:ResgisterEstimateComponent
      },
      {
        path : 'registerEstimate',
        component : ResgisterEstimateComponent
      },
       
      {
        path : 'registerCustomer',
        component : RegisterCustomerComponent
      },
      
      {
        path : 'customerDetail/:id',
        component : CustomerDetailComponent
      },
      {
        path:'searchCustomer',
        component:SearchCustomerComponent
      },
      {
        path : 'OrderDetailComponent/:id',
        component : OrderDetailComponent
      },
      {
        path : 'SearchCus',
        component : SearchCusComponent
      },
    
      {
        path : 'selectItem',
        component :ResgisterEstimateComponent
      },
    
      {
        path:'confirmEstimate/:estimate_id',
        component : ConfirmEstimateComponent
      },
      {
        path : 'updateCustomer/:customer_id',
        component : UpdateCustomerComponent
      },
      {
        path : 'testForm',
        component : TestFormComponent
      },
      {
        path : 'deleteCustomer/:id',
        component : DeleteCustomerComponent
      },
     
      {
        path : 'estimateDetail/:id',
        component :  EstimateDetailComponent
      },
      {
        path : 'readyOrderDetail/:id',
        component : ReadySODetailComponent
      },
      {
        path : 'orderInProduction/:id',
        component : SOInProductionDetailComponent
      },
      {
        path : 'deliveredOrder/:id',
        component : DeliveredSODetailComponent 
      },
      {
        path : 'confirmedOrder/:id',
        component :  ConfirmedOrderDetailComponent 
      },
      {
        path : 'updateEstimate/:id',
        component : UpdateEstimateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sales_routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class SalesRoutingModule { }
export const sales_routing_components=[SalesSidebarComponent,SalesContentComponent, SalesDashboardComponent, SearchCusComponent,CustomerDetailComponent,
SearchConfirmedSOComponent,ConfirmedOrderDetailComponent,SearchDeliveredSOComponent, DeliveredSODetailComponent,
ReadySODetailComponent,SearchReadySOComponent,SOInProductionDetailComponent,SearchSOInProductionComponent,
SearchEstimateComponent,RegisterCustomerComponent,ResgisterEstimateComponent,SearchCustomerComponent,
OrderDetailComponent,ConfirmEstimateComponent,UpdateCustomerComponent,UpdateEstimateComponent,TestFormComponent,DeleteCustomerComponent, EstimateDetailComponent];
