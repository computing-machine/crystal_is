import { Component, OnInit } from '@angular/core';
import {SalesOrderService} from '../../../data-services/sales_order/sales-order.service';
import {SalesOrder} from '../../../data-models/business-models/sales-order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {

  private order_id : SalesOrder;
  private order : SalesOrder;
  private bill_status : boolean;
  private update_bill_status : boolean;
  private amount : any;
  private total_amount_paid: number;
  private date = new Date();
  private updated_order :SalesOrder;
  private flag : boolean;
  constructor(private SO:SalesOrderService,private route : ActivatedRoute) { }

  ngOnInit() {

    this.setDate();
    this.amount = '';

    this.setBillStatus(false);
    this.setUpdateBillStatus(false);
    this.route.params.subscribe(param=>{
      this.order_id = param.id;
    });
    this.SO.getSalesOrderById(this.order_id).subscribe(order=>{
      this.order = new SalesOrder(order[0]);
      this.setBillStatus(true);
    });//getSaleOrderById
  }//ngOnInit

  setBillStatus(flag : boolean){this.bill_status = flag;}
  getBillSatus(){return this.bill_status;}

  amountAlert(){
    document.getElementById('amount_alert').setAttribute("class",' col-md-offset-4 col-md-4 show');
  }

  AmountInAppropriate(){
    document.getElementById('appro_alert').setAttribute("class",' col-md-offset-4 col-md-4 show');
  }

  saveBill(){
    if(this.amount==''){
     this.amountAlert();
     this.setUpdateBillStatus(false);
     this.flag = false;
    }
    else if( (parseInt(this.amount)) >this.order.getReceivables()){
      this.AmountInAppropriate();
      this.setUpdateBillStatus(false);
      this.flag = false;
    }
    else{
      this.flag = true;
      let payments = [];
      let builty = {};
      let new_invoice = {};

      //set invoice
      let invoice = this.order.getInvoice();
      for(let pay of invoice.getPayments()){
        let payment = {
          "date" : pay.getDate(),
          "amount": pay.getAmount()
        }
        payments.push(payment);
      }//for
      let newPay = {
        "date": this.getDate(),
        "amount" : this.amount
      }//newPay
      payments.push(newPay);

      //setbuilty
      builty = invoice.getBuilty()

      new_invoice = {
        "payment" : payments,
        "builty" : builty
      }
      this.order.setInvoice(new_invoice);
      let rec = this.order.getReceivables();
      rec= rec - this.amount;
      this.order.setReceivables(rec);
     
      this.total_amount_paid = this.order.getTotalPrice()-this.order.getReceivables()
    
      //update bill status , call service function

    this.SO.updateEstimate(this.order).subscribe(result=>{
        this.updated_order =  new SalesOrder(result[0]);
        this.setUpdateBillStatus(true);
      })
    }//else
  }

  resetAlerts(){
    document.getElementById('amount_alert').setAttribute("class",'hide');
    document.getElementById('appro_alert').setAttribute("class",'hide');
  }

  setDate(){
    var month = this.date.getMonth()+1;
    var day = this.date.getDate();
    var output = this.date.getFullYear() + '-' +
        ((''+month).length<2 ? '0' : '') + month + '-' +
        ((''+day).length<2 ? '0' : '') + day;
  }//setDate
  
  getDate():any{
    return this.date;
  }//getDate

  setUpdateBillStatus(flag:boolean){
    this.update_bill_status = flag;
  }//setUpdateBillStatus
  getUpdateBillStatus(){
    return this.update_bill_status;
  }//getUpdateBillStatus

}
