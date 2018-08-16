import { Component, OnInit, Inject } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from '../../../../data-models/collection-models/list';
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
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private SO : SalesOrderService,
              private FG : FinishedGoodService,private router : Router,
              private cusService :CustomerService ) {
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
    this.router.navigateByUrl("Sales/estimateDetail/"+orderId);
  }//detail

  updateOrder(orderId : any){
   this.router.navigateByUrl("Sales/updateEstimate/"+orderId);
  }//updateOrder
  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }
}
