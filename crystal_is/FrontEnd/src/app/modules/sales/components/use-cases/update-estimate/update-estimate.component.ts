import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../../data-models/business-models/customer';
import {CustomerService} from '../../../data-services/customer/customer.service';
import {List} from "../../../../../app-data-models/collection-models/list";
import {SalesOrder} from '../../../data-models/business-models/sales-order';
import {SalesOrderService} from '../../../data-services/sales_order/sales-order.service'
import {FinishedGood} from '../../../../inventory/data-models/business-models/finished-good';
import {FinishedGoodService} from '../../../../inventory/data-services/finished-good/finished-good.service';
import { Unit } from '../../../../inventory/data-models/business-models/unit';
import {UnitService} from '../../../../inventory/data-services/unit/unit.service';
import {FGDetailWithQuantity} from '../../../data-models/business-models/fgdetail-with-quantity';
import {OrderWithDeliverableDetail} from '../../../data-models/business-models/order-with-deliverable-detail';
import {Deliverables} from '../../../data-models/business-models/deliverables';
import { Deliverable } from '../../../../purchase/data-models/business-models/deliverable';


@Component({
  selector: 'app-update-estimate',
  templateUrl: './update-estimate.component.html',
  styleUrls: ['./update-estimate.component.css']
})
export class UpdateEstimateComponent implements OnInit {
  //private members
  private estimateId : any;
  private estimate : SalesOrder;
  private deli_detail : List<FGDetailWithQuantity>;
  private estimate_deli_detail : OrderWithDeliverableDetail;
  private data_status : boolean;
  private customer : Customer;
  private date = new Date();
  private catalog : List<FinishedGood>;
  private catalog_status : boolean;
  private units : List<Unit>;
  private pro_name : string;
  private unit_name : string;
  private res_catalog : List<FinishedGood>;
  private item_detail : FinishedGood;
  private item_detail_flag : boolean;
  private updated_estimate : SalesOrder;
  private update_est_flag : boolean;
  
  

  constructor(private route : ActivatedRoute,private Order_service :SalesOrderService,
              private fg_service :FinishedGoodService,private unit_service :UnitService,
              private cus_service : CustomerService  ){}//constructor

  ngOnInit() {
     //private members declaration
     this.deli_detail = new List<FGDetailWithQuantity>();
    this.res_catalog = new List<FinishedGood>();
    this.catalog = new List<FinishedGood>();
    this.units = new List<Unit>();
    
    this.setDataStatus(false);
    // public functions
    this.route.params.subscribe(param=>{
      this.estimateId = param.id;
    });//getestimateId from param
    //SalesOrder Service
    this.Order_service.getSalesOrderById(this.estimateId).subscribe(estimate_data =>{
      this.estimate = new SalesOrder(estimate_data[0]);//setEstimate
      console.log(this.estimate);
      //Customer Service
      this.cus_service.getCustomerById(this.estimate.getCusId()).subscribe(customer_data=>{
        this.customer = new Customer(customer_data);//set Customer
        this.unit_service.getActiveUnits().subscribe(unit_data=>{
          for(let unit of unit_data){
            this.units.add(new Unit(unit));
          }//for
           //loop through deliverables of Estimate
          for(let deliverable of this.estimate.getDeliverables()){
            let fg_id  = deliverable.getFGItemId();//set FGId in deliverable
            //FinishGood servce to get FG item 
            this.fg_service.getFinishedGood(fg_id).subscribe(fg_data=>{
              let fg = new FinishedGood(fg_data)//set FG item
                //set Deliverable in Estimate with FG and its detail
                let fg_detail_quantity_obj = new FGDetailWithQuantity(fg,deliverable.getQuantity(),fg.getUnitName(this.units));
                //set list of FG and their detail in Estimate 
                this.deli_detail.add(fg_detail_quantity_obj);
            });//get fg through service
          }//getDeliverables
          this.setDataStatus(false);
          this.estimate_deli_detail= new OrderWithDeliverableDetail(this.estimate,this.deli_detail);
          this.setDataStatus(true);
          console.log(this.estimate_deli_detail);
        });//unit service
      });//customer service to get customer by id
    });//getEstimateThroughService
  }//ngOnInit
 
  setDataStatus(flag : boolean){this.data_status = flag;}//setDataStatus
  setCatalogStatus(flag : boolean){this.catalog_status = flag;}//setCatalogStatus

  setDate(){
    var month = this.date.getMonth()+1;
    var day = this.date.getDate();
    var output = this.date.getFullYear() + '-' +
        ((''+month).length<2 ? '0' : '') + month + '-' +
        ((''+day).length<2 ? '0' : '') + day;
  }//setDate
  
  getDate():any{return this.date;}//getDate
  getDataStatus(){return this.data_status;}//getDataStatus
  getCatalogStatus(){return this.catalog_status;}//getCatalogStatus

//...................get Catalog..................
  getCatalog(){
    this.setCatalogStatus(false);
    this.fg_service.getActiveFinishedGoods().subscribe(fgs=>{
        this.catalog = new List<FinishedGood>();
        for(let fg of fgs ){
          this.catalog.add(new FinishedGood(fg));
        }//for
        this.res_catalog  = this.catalog;
        this.setCatalogStatus(true);
      });//get all fgs
  }//getCatalog

  getByProName(){
    let products = new List<FinishedGood>();
    for(let item of this.res_catalog){
      if(item.getName().toUpperCase().includes(this.pro_name.toUpperCase())){
        products.add(item);
      }//if
    }//for
    return products;
  }//getByProName

  getByUnitName(){
    let products = new List<FinishedGood>();
    for(let item of this.res_catalog){
      if(item.getUnitName(this.units).toUpperCase().includes(this.unit_name.toUpperCase())){
        products.add(item);
      }//if
    }//for
    return products;
  }//getByUnitName

  getItems(){
    this.res_catalog = this.catalog;
    if((this.pro_name!=undefined)&&(this.unit_name==undefined)){
      this.res_catalog = this.getByProName();
    }//if
    else if((this.pro_name==undefined)&&(this.unit_name!=undefined)){
      this.res_catalog = this.getByUnitName();
    }//else if
    else if((this.pro_name!=undefined)&&(this.unit_name!=undefined)){
      this.res_catalog = this.getByProName();
      this.res_catalog = this.getByUnitName();
    }//else if
  }//getItems

  addItems(item:FinishedGood,event_button : any){
    let parent_div = (event_button.parentElement);
    let quantity = (parent_div.childNodes[9].value);
    if(quantity==''){
     parent_div.childNodes[10].setAttribute("class","show");
    }
    else{
      parent_div.childNodes[10].setAttribute("class","hide");
      let unit = item.getUnitName(this.units);
      let fg_detail_quantity_obj = new FGDetailWithQuantity(item,quantity,unit);
      this.deli_detail.add(fg_detail_quantity_obj);
    }
  }//addItems

  deleteItem(item:FGDetailWithQuantity){
    let index =  this.deli_detail.getIndexOf(item);
    this.deli_detail.delete(index);
  }//deleteItem

  itemDetail(item : FinishedGood){
    this.SetitemDetailStatus(false);
   this.item_detail =item;
   this.SetitemDetailStatus(true);
  }//itemDetail

  SetitemDetailStatus(flag : boolean){
    this.item_detail_flag = flag;
  }//itemDetailStatus
  getItemDetailStatus():boolean{return this.item_detail_flag;}

  removeQuantityAlert(input_field : any){
    let parent_div = input_field.parentElement;
    parent_div.childNodes[10].setAttribute("class","hide");
  }//removeQuantityAlert

  setTotalPrice(){
    let price = 0;
    for(let fg_detail of this.deli_detail){
      price = price + (parseInt(fg_detail.getQuantity())*(fg_detail.getFG().getPrice()));
    }
   return price;
  }//setTotalPrice

  //..............Update Estimate ..................
  updateEstimate(){
    this.setupdateStatus(false);
    this.updated_estimate = new SalesOrder();
    let outdated_estimate = this.estimate_deli_detail.getEstimate();
    //set updated Estimate
    this.updated_estimate.setSaleOrderId(outdated_estimate.getSalesOrderId());//SET ESTIMATE ID
    this.updated_estimate.setSalePersonId(outdated_estimate.getSalesPersonId());//SET SALESPERSON ID
    this.updated_estimate.setCusId(outdated_estimate.getCusId());//SET CUSTOMER ID
    this.updated_estimate.setOrderDate(outdated_estimate.getOrderDate());//SET ORDER DATE
    this.updated_estimate.setTotalprice(this.setTotalPrice());
    this.updated_estimate.setReceivables(this.setTotalPrice());
    this.updated_estimate.setInvoice({"payment":[],"builty":{}});
    this.updated_estimate.setOrderHistory(outdated_estimate.getOrderHistory());
    this.updated_estimate.setStatus(outdated_estimate.getStatus());
    
    //setDeliverables
  
    let deliverables = [];

    for(let fg_detail of this.deli_detail){
      let deli = {"fg_id":fg_detail.getFG().getId(),"quantity":fg_detail.getQuantity()}
      deliverables.push(deli);
    }//for
    console.log(deliverables);
    this.updated_estimate.setDeliverables(deliverables);
    console.log(this.updated_estimate);
    this.Order_service.updateEstimate(this.updated_estimate).subscribe(result=>{
      this.setupdateStatus(true);
    });//salesOrder service to update salesOrder
  }//updateEstimate

  setupdateStatus(flag : boolean){this.update_est_flag = flag;}
  getupdateStatus():boolean{return this.update_est_flag;}

}
