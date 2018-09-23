import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SalesOrder} from '../../../data-models/business-models/sales-order';
import {SalesOrderService} from '../../../data-services/sales_order/sales-order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-estimate',
  templateUrl: './confirm-estimate.component.html',
  styleUrls: ['./confirm-estimate.component.css']
})
export class ConfirmEstimateComponent implements OnInit {
  private Estimate : SalesOrder;
  private data_status : boolean;

  constructor(private router : ActivatedRoute,private SO : SalesOrderService,private route : Router) { }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.setDataStatus(false);
      if(params.estimate_id!=undefined){
        console.log(params.estimate_id);
        this.SO.getSalesOrderById(params.estimate_id).subscribe(orders =>{
         let tempOrder = new SalesOrder(orders[0]);
          this.setEstimate(tempOrder);
          this.SO.ConfirmEstimate(this.getEstimate()).subscribe(response=>{
            this.setDataStatus(true);
          })
        });//SaleOrder_service
      }//if
    })
  }//ngOnInit

  setEstimate(order:SalesOrder){
    this.Estimate = order;
  }//setEstimate
  setDataStatus(flag : boolean){
    this.data_status = flag;
  }//setDataStatus
  getEstimate():SalesOrder{
    return this.Estimate;
  }//getEstimate
  getDataStatus():boolean{return this.data_status;}

  route2index(){
    console.log("pomo");
    this.route.navigateByUrl('Sales/registerEstimate');
  }
}//class
