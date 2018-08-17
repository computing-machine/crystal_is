import { Component, OnInit, Inject } from '@angular/core';
import {PurchaseOrderService} from "../../../../data-services/purchase-order/purchase-order.service";
import {VendorService} from "../../../../data-services/vendor-service/vendor.service";
import { PurchaseOrder } from '../../../../data-models/business-models/purchase-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import { Employee } from '../../../../../payroll/data-models/business-models/employee';
import { Vendor } from '../../../../data-models/business-models/vendor';
import { EmployeeService } from '../../../../../payroll/data-services/Employee/employee.service';
import {Router} from "@angular/router";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-purchase-order',
  templateUrl: './search-purchase-order.component.html',
  styleUrls: ['./search-purchase-order.component.css']
})
export class SearchPurchaseOrderComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
              private purchase_order_service:PurchaseOrderService,
              private purchaser_service:EmployeeService,
              private vendor_service:VendorService, private router:Router) { }

  ngOnInit() {
    this.setDataReady(false);
    this.setPurchaseOrders(new List<PurchaseOrder>());
    this.setPurchasers(new List<Employee>());
    this.setVendors(new List<Vendor>());
    this.purchase_order_service.getPurchaserOrdersByPurchaser(this.storage.get("user_id")).subscribe(purchase_orders_data=>{
      console.log(this.storage.get("user_id"));
      for(let data of purchase_orders_data){
        this.getPurchaseOrders().add(new PurchaseOrder(data));
      }//for
      //asyn call
        this.vendor_service.getVendors().subscribe(vendors_data=>{
          for(let data of vendors_data){
            this.getVendors().add(new Vendor(data));
          }//for
          
          this.setDataReady(true);
        });//data-service
    })//data-service
  }//ngOnInit

  //mutators
  setPurchaseOrders(given_purchase_orders:List<PurchaseOrder>):void{this.purchase_orders=given_purchase_orders;}
  setPurchasers(given_purchasers:List<Employee>):void{this.purchasers=given_purchasers;}
  setVendors(given_vendors:List<Vendor>):void{this.vendors=given_vendors;}
  setDataReady(given_data_ready:boolean):void{this.data_ready=given_data_ready;}

  //accessors
  getPurchaseOrders():List<PurchaseOrder>{return this.purchase_orders;}
  getPurchasers():List<Employee>{return this.purchasers;}
  getVendors():List<Vendor>{return this.vendors;}
  getDataReady():boolean{return this.data_ready;}

  getPurchaseOrderDetail(purchase_order_id:object, given_route:string){
    this.router.navigateByUrl(given_route+purchase_order_id);
  }//method

  //data members
  private purchase_orders:List<PurchaseOrder>;
  private purchasers:List<Employee>;
  private vendors:List<Vendor>;
  private data_ready:boolean;

}//class ends
