import { Component, OnInit } from '@angular/core';
import {SalesOrderService} from "../../../../sales/data-services/sales_order/sales-order.service";
import { List } from '../../../../../app-data-models/collection-models/list';
import { SalesOrder } from '../../../../sales/data-models/business-models/sales-order';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

  constructor(private sales_order_service:SalesOrderService) { }

  ngOnInit() {
    this.setDataReady(false);
    this.setConfirmedOrders(new List<SalesOrder>());
    this.setProductionOrders(new List<SalesOrder>());
    this.setReadyOrders(new List<SalesOrder>());
    this.setDeliveredOrders(new List<SalesOrder>());

    this.sales_order_service.getAllConfirmedOrders().subscribe((sales_orders)=>{
      for(let so of sales_orders){
        this.getConfirmedOrders().add(new SalesOrder(so));
      }//for

      //asyn call
      this.sales_order_service.getAllProductionOrders().subscribe((sales_orders)=>{
        for(let so of sales_orders){
          this.getProductionOrders().add(new SalesOrder(so));
        }//for

        //asyn call
        this.sales_order_service.getAllReadyOrders().subscribe((sales_orders)=>{
          for(let so of sales_orders){
            this.getReadyOrders().add(new SalesOrder(so));
          }//for

          //asyn call
          this.sales_order_service.getAllDeliveredOrders().subscribe((sales_orders)=>{
            for(let so of sales_orders){
              this.getDeliveredOrders().add(new SalesOrder(so));
            }//for

            this.setDataReady(true);
          });
        });
      });
    });
  }//ngOnInit

  setConfirmedOrders(sales_orders:List<SalesOrder>):void{
    this.confirmed_sales_orders=sales_orders;
  }//getter

  setProductionOrders(sales_orders:List<SalesOrder>):void{
    this.production_sales_orders=sales_orders;
  }//getter

  setReadyOrders(sales_orders:List<SalesOrder>):void{
    this.ready_sales_orders=sales_orders;
  }//getter

  setDeliveredOrders(sales_orders:List<SalesOrder>):void{
    this.delivered_sales_orders=sales_orders;
  }//getter

  setDataReady(value:boolean):void{
    this.data_ready=value;
  }//setter

  getConfirmedOrders():List<SalesOrder>{
    return this.confirmed_sales_orders;
  }//getter

  getProductionOrders():List<SalesOrder>{
    return this.production_sales_orders;
  }//getter

  getReadyOrders():List<SalesOrder>{
    return this.ready_sales_orders;
  }//getter

  getDeliveredOrders():List<SalesOrder>{
    return this.delivered_sales_orders;
  }//getter

  getDataReady():boolean{
    return this.data_ready;
  }//getter
  
  private confirmed_sales_orders:List<SalesOrder>;
  private production_sales_orders:List<SalesOrder>;
  private ready_sales_orders:List<SalesOrder>;
  private delivered_sales_orders:List<SalesOrder>;
  private data_ready:boolean;

}//InventoryDashboardComponent
