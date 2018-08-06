import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import {FinishedGood} from '../../../../../inventory/data-models/business-models/finished-good';
import {List} from '../../../../data-models/collection-models/list';
import {Route} from '@angular/router';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  //private members declaration for Order
  private order_id : object;
  private order : SalesOrder;
  private data_status:boolean;
  private customer : Customer;
  //private members declaration for item
  private deliverables : List<any>;
  private item : FinishedGood;

  constructor(private route : ActivatedRoute,private SO_service:SalesOrderService,private FG_service : FinishedGoodService,private cusService : CustomerService ) { }
  ngOnInit() {
    //private members initialization
    this.deliverables = new List<any>();

    this.setDataStatus(false);   
    this.route.params.subscribe(params=>this.setOrderId(params.id));
    //....................get Orderdata through service.....................
    this.SO_service.getSalesOrderById(this.getOrderId()).subscribe(response=>{
      this.cusService.getCustomerById(response[0].customer_id).subscribe(customer=>{
        this.setCustomer(customer);
        let saleorder_data = response ;
        for(let data of saleorder_data){
          let saleorder = new SalesOrder(data);
          this.setSalesOrder(saleorder);
        }//for
      });//customer from service
    });//salesorder from service
     
  }//ngOnInit

  //........................Order-Detail functions...................
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
    let deliverable = {"item" : item , "quantity" : quantity}
    this.deliverables.add(deliverable);
  }//setDeliverableInSO

  getDeliverablesInSO():List<any>{
    return this.deliverables;
  }//getDeliverablesInSO

  //..............................Item Detail functions.......................
 
  

}
