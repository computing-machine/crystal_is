import { List } from "../collection-models/list";
import { Invoice } from "./invoice";
import { Deliverable } from "./deliverable";
import { Vendor } from "./vendor";
import { PurchaseOrderData } from "../json-models/purchase-order-data";
import { PurchaseOrderStatusEnum } from "../collection-models/purchase-order-status-enum.enum";
import { Employee } from "../../../payroll/data-models/business-models/employee";


export class PurchaseOrder {

    constructor(data : PurchaseOrderData){
        this.setId(data._id);
        this.setPurchaserId(data.purchaser_id);
        this.setVendorId(data.vendor_id);
        this.setOrderDate(data.order_date);
        this.setDueDate(data.due_date);
        this.setStatus(data.status);
        this.setPayable(data.payable);
        this.setInvoice(new Invoice(data.invoice));
        this.setDeliverables(new List<Deliverable>());
        
        for(let deliverable_data of data.deliverables){
            this.getDeliverables().add(new Deliverable(deliverable_data));
        }//for
    }//constructor

    //mutators
    setId(given_id:object):void{this.id=given_id;}
    setPurchaserId(given_purchaser_id:object):void{this.purchaser_id=given_purchaser_id;}//method
    setVendorId(given_vendor_id:object):void{this.vendor_id=given_vendor_id;}//method
    setOrderDate(given_OrderDate:Date):void{this.order_date=given_OrderDate;}//method
    setDueDate(given_DueDate:Date):void{this.due_date=given_DueDate;}//method
    setStatus(given_status:string):void{this.status=given_status;}
    setPayable(given_Payable:number):void{this.payable=given_Payable;}//method
    setInvoice(given_invoice:Invoice):void{this.invoice=given_invoice;}//method
    setDeliverables(given_deliverables):void{this.deliverables=given_deliverables;}
  
    //accessors
    getId():object{return this.id;}
    getPurchaserId():object{return this.purchaser_id;}//method
    getVendorId():object{return this.vendor_id;}
    getOrderDate():Date{return this.order_date;}//method
    getDueDate():Date{return this.due_date;}//method
    getStatus():string{return this.status;}
    getPayable():number{return this.payable;}//method
    getInvoice():Invoice{return this.invoice;}
    getDeliverables():List<Deliverable>{return this.deliverables;} 

    //methods
    getPurchaserName(given_purchasers:List<Employee>):string{
        for(let purchaser of given_purchasers){
            if(this.getPurchaserId()==purchaser.getId()){
                return purchaser.getName();
            }//if
        }//for
    }//method

    getVendorName(given_vendors:List<Vendor>):string{
        for(let vendor of given_vendors){
            if(this.getVendorId()==vendor.getId()){
                return vendor.getName();
            }//if
        }//for
    }//method

    getLateDays():number{
        if(this.getStatus()!=PurchaseOrderStatusEnum.closed){
            return new Date().valueOf()-this.getDueDate().valueOf();
        }//if
    }//method

    //data members
    private id:object;
    private status:string;
    private purchaser_id:object;
    private vendor_id:object;
    private order_date:Date;
    private due_date:Date;
    private payable:number;
    private deliverables:List<Deliverable>;
    private invoice:Invoice;
}//PurchaseOrder