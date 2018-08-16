import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {FinishedGood} from '../../../../../inventory/data-models/business-models/finished-good';
import {List} from '../../../../data-models/collection-models/list';
import {Customer} from '../../../../data-models/business-models/customer';
import { Unit } from '../../../../../inventory/data-models/business-models/unit';
import {ActivatedRoute} from '@angular/router';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import {Route} from '@angular/router';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {UnitService} from '../../../../../inventory/data-services/unit/unit.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  //private members declaration for Order
  private date = new Date();
  private order_id : object;
  private order : SalesOrder;
  private data_status:boolean;
  private customer : Customer;
  private units : List<Unit>;
  //private members declaration for item
  private deliverables : List<any>;
  private item : FinishedGood;

  constructor(public route : ActivatedRoute,public SO_service : SalesOrderService,
     public FG_service : FinishedGoodService,public cusService : CustomerService,
      public unit_ser : UnitService ) { }
  ngOnInit() {
    this.setOrder(); 
  }//ngOnInit

  setOrder(){
    
    //private members initialization
    this.deliverables = new List<any>();
    this.units = new List<Unit>();
    this.setDataStatus(false);   
    this.route.params.subscribe(params=>this.setOrderId(params.id));
    console.log(this.getOrderId());
    //....................get Orderdata through service.....................
    this.SO_service.getSalesOrderById(this.getOrderId()).subscribe(response=>{
      this.cusService.getCustomerById(response[0].customer_id).subscribe(customer=>{
        this.unit_ser.getUnits().subscribe(units_data =>{
          for(let unit of units_data){
              this.setUnits(unit);
          }//for
          this.setCustomer(customer);
          let saleorder_data = response ;
          for(let data of saleorder_data){
            let saleorder = new SalesOrder(data);
            this.setSalesOrder(saleorder);
          }//for
        });//units from service
      });//customer from service
    });//salesorder from service
  }

  //........................Order-Detail functions...................
  setUnits(unitdata : any){
    this.units.add(new Unit(unitdata));
  }//setUnits
  getUnits():List<Unit>{return this.units;}
  setCustomer(customer_data : any){
    this.customer = new Customer(customer_data);
  }//setCustomer

  getCustomer():Customer{return this.customer;}

  setDataStatus(status:boolean){
    this.data_status= status
  }//setDataStatus
  setOrderId(id:object){
    this.order_id = id;
  }//setOrderId
  setSalesOrder(saleorder : SalesOrder){
    this.order = saleorder;
    for(let deliverable of this.order.getDeliverables() ){
      this.setFGInSO(deliverable.getFGItemId(),deliverable.getQuantity());//set FG detail through FG id;
    }//for
  }//setSalesOrder

  getDataStatus():boolean{
    return this.data_status;
  }//setDataStatus
  getSaleOrder():SalesOrder{
    return this.order;
  }//getSaleOrder
  getOrderId():object{return this.order_id;}

  setFGInSO(itemId,quantity){
    this.FG_service .getFinishedGood(itemId).subscribe(response=>{
      let fg_data = response;
      this.setDeliverableInSO(new FinishedGood(fg_data),quantity);
      this.setDataStatus(true);
    });
  }//setFGInSO
  
  setDeliverableInSO(item:FinishedGood, quantity : any){
    console.log(this.getUnits());
    let deliverable = {"item" : item , "quantity" : quantity}
    this.deliverables.add(deliverable);
  }//setDeliverableInSO

  getDeliverablesInSO():List<any>{
    return this.deliverables;
  }//getDeliverablesInSO

  //..............................Item Detail functions.......................
 
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

}
