import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {PurchaseOrderService} from "../../../../data-services/purchase-order/purchase-order.service";
import { EmployeeService } from '../../../../../payroll/data-services/Employee/employee.service';
import {VendorService} from "../../../../data-services/vendor-service/vendor.service";
import { Employee } from '../../../../../payroll/data-models/business-models/employee';
import { Vendor } from '../../../../data-models/business-models/vendor';
import { PurchaseOrder } from '../../../../data-models/business-models/purchase-order';

@Component({
  selector: 'app-view-purchase-order-detail',
  templateUrl: './view-purchase-order-detail.component.html',
  styleUrls: ['./view-purchase-order-detail.component.css']
})
export class ViewPurchaseOrderDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private purchase_order_service:PurchaseOrderService,
              private employee_service:EmployeeService, private vendor_service:VendorService) {
    this.route.params.subscribe(params=>this.purchase_order_id=params.id);
   }//constructor

  ngOnInit() {
    this.setDataReady(false);
    this.setShowInvoice(false);
    this.setShowDeliverables(true);
    this.purchase_order_service.getPurchaseOrder(this.purchase_order_id).subscribe(purchase_order_data=>{
        this.setPurchaseOrder(new PurchaseOrder(purchase_order_data));
        //asyn call
        this.employee_service.getPurchaser(this.getPurchaseOrder().getPurchaserId()).subscribe(purchaser_data=>{
          this.setPurchaser(new Employee(purchaser_data));
          //asyn call
          this.vendor_service.getVendor(this.getPurchaseOrder().getVendorId()).subscribe(vendor_data=>{
            this.setVendor(new Vendor(vendor_data));
            this.setDataReady(true);
          });
        });
    });//data service
  }//ngOninit

  showDeliverables(){
    if(this.getShowDeliverables()){
      this.setShowDeliverables(false);
    }//if
    else{
      this.setShowInvoice(false);
      this.setShowDeliverables(true);
    }//else
  }//method

  showInvoice(){
    if(this.getShowInvoice()){
      this.setShowInvoice(false);
    }//if
    else{
      this.setShowDeliverables(false);
      this.setShowInvoice(true);
    }//else
  }//method

  setPurchaseOrder(given_purchase_order:PurchaseOrder):void{this.purchase_order=given_purchase_order;}
  setPurchaser(given_purchaser:Employee):void{this.purchaser=given_purchaser;}
  setVendor(given_vendor:Vendor):void{this.vendor=given_vendor;}
  setDataReady(given_value:boolean):void{this.data_ready=given_value;}
  setShowDeliverables(value:boolean):void{this.show_deliverables=value;}
  setShowInvoice(value:boolean):void{this.show_invoice=value;}

  getPurchaseOrder():PurchaseOrder{return this.purchase_order;}
  getPurchaser():Employee{return this.purchaser;}
  getVendor():Vendor{return this.vendor;}
  getDataReady():boolean{return this.data_ready;}
  getShowDeliverables():boolean{return this.show_deliverables;}
  getShowInvoice():boolean{return this.show_invoice;}

  //data member
  private purchase_order_id:object;
  private purchase_order:PurchaseOrder;
  private purchaser:Employee;
  private vendor:Vendor;
  private data_ready:boolean;
  private show_deliverables:boolean;
  private show_invoice:boolean;
}//class ends
