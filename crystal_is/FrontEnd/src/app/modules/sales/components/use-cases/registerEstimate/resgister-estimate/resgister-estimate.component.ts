import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
//...........customer service
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {Customer} from '../../../../data-models/business-models/customer';
//..................Select FinishedGood.....................
import {FinishedGood} from '../../../../../inventory/data-models/business-models/finished-good';
import {List} from '../../../../data-models/collection-models/list';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';

@Component({
  selector: 'app-resgister-estimate',
  templateUrl: './resgister-estimate.component.html',
  styleUrls: ['./resgister-estimate.component.css']
})
export class ResgisterEstimateComponent implements OnInit {

  private customerId : any;
  private customer : Customer;
  //.............select FG......................
  //private members
    private finishGoods : List<FinishedGood>;
    private data_status : boolean;
    private fg_quanity : number;
    private selectedFG : List<any>;
    private est_reg_flag : boolean;
    private date = new Date();
    private Estimate :SalesOrder;
    private cusDataFlag : boolean;
    

  constructor(private router : ActivatedRoute,private route : Router,private fg : FinishedGoodService, private customer_service : CustomerService,private SO : SalesOrderService) { }

  ngOnInit() {
     //private members declaration in FG selection
     this.finishGoods = new List<FinishedGood>();
     this.selectedFG = new List<any>();
     this.setDate();//set date
    this.fg_quanity = 0;
    this.setregEstFlag(false);

    this.router.params.subscribe(params=>
      {
        if(params.id!=undefined){
          this.setCusId(params.id);
          this.setCusDataFlag(false);
          document.getElementById('regcus').setAttribute("class","hide");
          document.getElementById('searchcus').setAttribute("class","hide");
          this.customer_service.getCustomerById(this.getCusId()).subscribe(data=>{
            this.setCustomer(data);
            this.setCusDataFlag(true);
          });//set customer
          //this.route.navigateByUrl("selectItem");
          this.selectItem();
        }//if
      });
  }

  setCusDataFlag(flag : boolean){
    this.cusDataFlag = flag;
  }//setCusDataFlag
  getCusDataFlag():boolean{return this.cusDataFlag}//getCusDataFlag

 setCusId(cusId : any){
  this.customerId = cusId;
 }//setCustomerId

 registerCustomer(){
  this.route.navigateByUrl("Sales/registerCustomer");
 }//registerCustomer

 searchCustomer(){
  this.route.navigateByUrl("Sales/SearchCus");
 }//searchCustomer
 
 getCusId():object{
   return this.customerId;
 }//getCusId

 //..............................select FG ......................................

 selectItem(){
    this.setDataStatus(false);
    this.fg.getFinishedGoods().subscribe(FinishedGoods=>{
    this.setFinishGoods(FinishedGoods);
    this.setDataStatus(true);
    }); 
 }//selectItem

 setDataStatus(status : boolean){
  this.data_status = status;
}//setDataStatus

setFinishGoods(FinishedGoods : any){
  for(let fg_data of FinishedGoods){
      let fg = new FinishedGood(fg_data);
      this.finishGoods.add(fg);
  }//for
}//setFinishGoods

setSelectedFGItems(element : any ,item : FinishedGood){
  
  if(element.innerHTML=='Select'){
    element.innerHTML = 'Selected';
    let fg = {"fg" : item , "quantity" : this.fg_quanity}
    this.selectedFG.add(fg);
  }//if
  /*else if(element.innerHTML == 'Selected'){
    element.innerHTML = 'Select';
    let index = this.selectedFG.IndexOfItem({fg : item,quantity :"8"})
    console.log(index);
    //this.selectedFG.delete(index);
    for(let i of this.selectedFG){
      console.log(typeof(i));
      console.log(typeof(this.quantity));
    }
    console.log(typeof(item));
  }//else if
  this.fg_quanity=1;
*/
}//setFGItem

setQuantity( value : any){
  this.fg_quanity = value;
}//setQuanity


getDataStatus():boolean{
  return this.data_status;
}//getDataStatus

getFinishGoods():List<FinishedGood>{
  return this.finishGoods;
}//getFinishGoods

getQuantity():number{
  return this.fg_quanity;
}//getQuantity
getSelectedFGItems():any{
  return this.selectedFG;
}//getSelectedFGItem

setDate(){
  
  var month = this.date.getMonth()+1;
  var day = this.date.getDate();
  var output = this.date.getFullYear() + '-' +
      ((''+month).length<2 ? '0' : '') + month + '-' +
      ((''+day).length<2 ? '0' : '') + day;
}
getDate():any{
  return this.date;
}

setSalesOrder(){
  let salesOrder = new SalesOrder();
  salesOrder.setCusId(this.getCusId());
  salesOrder.setStatus("Estimate");
  salesOrder.setOrderDate(this.getDate());
  let price = 0;
  let deliverables = [];
  for(let item of this.selectedFG){
    let fg_id = item.fg.getId();
    let quan = item.quantity;
     price = price + (item.fg.getPrice()*quan);
     deliverables.push({"fg_id":fg_id,"quantity" : quan});
  }
  salesOrder.setDeliverables(deliverables);
  salesOrder.setTotalprice(price);
  salesOrder.setReceivables(price);
  salesOrder.setOrderHistory([{"status":"Estimate","date" : this.getDate()}]);
  return salesOrder;
}//setSalesOrder

//................Add Order.....................
AddOrder(){
  document.getElementById('myModal').setAttribute("class","show");
  document.getElementById('selectItem').setAttribute("class","hide");
  document.getElementById('regcus').setAttribute("class","hide");
  document.getElementById('searchcus').setAttribute("class","hide");
  document.getElementById('cus_detail').setAttribute("class","hide");
    let salesOrder = this.setSalesOrder();
    this.SO.addOrder(salesOrder).subscribe(response=>{
    this.setEstimate(new SalesOrder(response));
      this.setregEstFlag(true);
  
});
}//AddOrder

setEstimate(salesOrderData : SalesOrder){
  this.Estimate = salesOrderData;
}//setEstimate
getEstimate():SalesOrder{
  return this.Estimate
}

getRegisteredEstimate():SalesOrder{
  return this.Estimate;
}//getRegisteredEstimate

setregEstFlag(flag : boolean){
  this.est_reg_flag = flag;
}//setCusDataFlag

getregEstFlag():boolean{
  return this.est_reg_flag;
}//getCusDataFlag

//........................Select customer functions ...................
setSelectedCustomer(){
  this.customer_service.getCustomerById(this.getCusId()).subscribe(data=>{
    this.setCustomer(data);
  });
}//searchCustomer
setCustomer(cusdata : any){
  this.customer = new Customer(cusdata);
}//setCustomer

getCustomer():Customer{
  return this.customer;
}//getCustomer

confirmEstimate(estimate_id:any){
  this.route.navigateByUrl("Sales/confirmEstimate/"+estimate_id);
}//confirmEstimate


}//Register Estimate Component
