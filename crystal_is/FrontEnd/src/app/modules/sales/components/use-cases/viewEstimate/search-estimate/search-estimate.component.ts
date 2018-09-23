import { Component, OnInit, Inject } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {Customer} from '../../../../data-models/business-models/customer';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { SalesOrderService } from '../../../../data-services/sales_order/sales-order.service';
import { FinishedGoodService } from '../../../../../inventory/data-services/finished-good/finished-good.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../../data-services/customer/customer.service';


@Component({
  selector: 'app-search-estimate',
  templateUrl: './search-estimate.component.html',
  styleUrls: ['./search-estimate.component.css']
})
export class SearchEstimateComponent extends SearchOrderComponent implements OnInit {

  private saleOrder_id : any;
  private deleted_estimate : SalesOrder;
  private confirm_status : boolean;
  private del_status : boolean;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private SO : SalesOrderService,
              private FG : FinishedGoodService,private router : Router,
              private cusService :CustomerService ) {
    super();
   }

  ngOnInit(){
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getEstimatesBySalPerId(this.storage.get('user_id')).subscribe(response =>{
      for(let estimate of response){
        this.getOrders().add(new SalesOrder(estimate));
        this.cusService.getCustomerById(estimate.customer_id).subscribe(cus_data=>{
          let customer = new Customer(cus_data);
         this.getOrderCusList().add({"Customer":customer, "Order" : new SalesOrder(estimate)});
        });//getCustomers
      }//for
      this.setResultOrders(this.getOrders());
      this.setDataStatus(true);
    });//getConfirmedOrders
  }//ngOnInit

  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/estimateDetail/"+orderId);
  }//detail

  updateOrder(orderId : any){
   this.router.navigateByUrl("Sales/updateEstimate/"+orderId);
  }//updateOrder
  confirmEstimate(estimateId :any){
    this.setEstimateconStatus(false);
    this.SO.getSalesOrderById(estimateId).subscribe(estimate=>{
      let order = new SalesOrder(estimate[0]);
      this.SO.ConfirmEstimate(order).subscribe(result=>{
         //delete item
         let orders = this.getOrders();
         let index = orders.getIndexOf(order);
         orders.delete(index);
         this.setOrders(orders);
         
       this. setEstimateconStatus(true);
      });
    });//getSalesOrderById
  }//confirmEstimate

  deleteOrder(estimateId:any){
    this.setEstimateDelStatus(false);
    this.SO.deleteEstimate(estimateId).subscribe(result=>{
      this.deleted_estimate = new SalesOrder(result[0]);
      this.setEstimateDelStatus(true);
    });
  }//deleteOrder

  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }
  setEstimateDelStatus(flag:boolean){
    this.del_status = flag;
  }//setEstimateDelStatus
  getEstimateDelStatus():boolean{return this.del_status;}

  setEstimateconStatus(flag:boolean){
    this.confirm_status = flag;
  }//setEstimateconStatus
  getEstimateconStatus():boolean{
    return this.confirm_status;
  }
}
