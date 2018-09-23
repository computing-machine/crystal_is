import {Deliverables} from './deliverables';
import {List} from "../../../../app-data-models/collection-models/list";
import {Invoice} from './invoice';
import {Orderhistory} from './orderhistory';
import { Deliverable } from '../../../purchase/data-models/business-models/deliverable';

export class SalesOrder {
    //private members
    private saleorder_id : any;
    private sale_per_id:object;
    private cus_id : object;
    private order_date : any;
    private receivables:number;
    private total_price : number;
    private invoice :Invoice;
    private deliverables : List<Deliverables>;
    private history : List<Orderhistory>;
    private status:string;

    //constructor
    constructor(sales_order_data ?: any){
        if(sales_order_data!=undefined){
            this.setSaleOrderId(sales_order_data._id);
            this.setSalePersonId(sales_order_data.salesperson_id);
            this.setCusId(sales_order_data.customer_id);
            this.setOrderDate(sales_order_data.order_date);
            this.setReceivables(sales_order_data.receivables);
            this.setTotalprice(sales_order_data.total_price);
            this.setInvoice(sales_order_data.invoice);
            this.setDeliverables(sales_order_data.deliverables);
            this.setOrderHistory(sales_order_data.history);
            this.setStatus(sales_order_data.status);
        }//if
    }//constructor
    setStatus(status:string){
        this.status = status;
    }//setStatus
    setOrderHistory(history_data:any){
        this.history = new List<Orderhistory>();
        for(let history of history_data){
            this.history.add(new Orderhistory(history));  
        }//for
    }//setOrderHistory
    setSaleOrderId(saleorder : any){
        this.saleorder_id = saleorder;
    }//setSaleOrderId
    setSalePersonId(sale_per_id:object){
        this.sale_per_id = sale_per_id;
    }//setSalePersonId
    setCusId(cus_id:object){
        this.cus_id = cus_id;
    }//setCusId
    setOrderDate(date:any){
        this.order_date = date;
    }//setOrderDate
    setReceivables(receivables:number){
        this.receivables = receivables;
    }//setReceivables
    setTotalprice(total_price:number){
        this.total_price = total_price;
    }//setTotalPrice
    setInvoice(invoice_data:any){
        this.invoice = new Invoice(invoice_data)
    }//setInvoice
    setDeliverables(deliverables : any){
        this.deliverables = new List<Deliverables>();
        for(let deliverable_data of deliverables){
            let deliverable = new Deliverables(deliverable_data);
            this.deliverables.add(deliverable);
        }//for
    }//setDealiverables
    getStatus(){
        return this.status;
    }
    getSalesOrderId():any{
        return this.saleorder_id;
    }//getSalesOrderId
    getSalesPersonId():object{
        return this.sale_per_id;
    }//getSalesPersonId
    getCusId():object{
        return this.cus_id;
    }//getCusId
    getOrderDate():any{
        return this.order_date;
    }//getOrderDate
    getReceivables():number{
        return this.receivables;
    }//getReceivables
    getTotalPrice():number{
        return this.total_price;
    }//getTotalPrice
    getInvoice():Invoice{
        return this.invoice;
    }//getInvoice
    getDeliverables():List<Deliverables>{
        return this.deliverables;
    }//getDeliverables
    getOrderHistory():List<Orderhistory>{
        return this.history;
    }//getOrderHIstory
   
}//class
