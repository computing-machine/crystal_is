import { Component, OnInit, Inject } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from '../../../../data-models/collection-models/list';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-estimate',
  templateUrl: './search-estimate.component.html',
  styleUrls: ['./search-estimate.component.css']
})
export class SearchEstimateComponent extends SearchOrderComponent implements OnInit {

  private temp : any;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private SO : SalesOrderService, private cusService : CustomerService, private router : Router) {
    super();
   }

  ngOnInit() {
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
    this.router.navigateByUrl("Sales/OrderDetailComponent/"+orderId);
  }//detail

  updateOrder(orderId : any){
    this.router.navigateByUrl("Sales/UpdateEstimate/"+orderId);
  }//updateOrder
  setTemp(id : any){
    this.temp = id
  }
  getTemp():any{
    return this.temp;
  }
}
