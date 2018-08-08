import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {SalesOrderService} from '../../data-services/sales_order/sales-order.service';
import { SalesOrder } from '../../data-models/business-models/sales-order';
import {FinishedGood} from '../../../inventory/data-models/business-models/finished-good';
import {FinishedGoodService} from '../../../inventory/data-services/finished-good/finished-good.service'
import {List} from '../../data-models/collection-models/list';
 
@Component({
  selector: 'app-update-sales-order',
  templateUrl: './update-sales-order.component.html',
  styleUrls: ['./update-sales-order.component.css']
})
export class UpdateSalesOrderComponent implements OnInit {

  //private members declaration
  private estimate_id : any;
  private estimate : SalesOrder;
  private finishgood : FinishedGood;
  private fg_id : any;
  private finished_goods : List<FinishedGood>
  private data_status : boolean;
  //constructor
  constructor(private router:Router,private acti_router : ActivatedRoute,
              private sale_order : SalesOrder,private Sale_order_ser : SalesOrderService,
              private fg_service : FinishedGoodService) { }

  ngOnInit() {
    //private members initialization
    this.finished_goods = new List<FinishedGood>();

    this.acti_router.params.subscribe(params =>{
      if(params.orderId !=undefined){
        this.setEstimateId(params.orderId);
        this.Sale_order_ser.getSalesOrderById(this.getEstimateId()).subscribe(estimate_data =>{
          this.setEstimate(estimate_data);
          for(let deliverable of this.getEstimate().getDeliverables()){
              this.setFinishGoodId(deliverable.getFGItemId());
              this.fg_service.getFinishedGood(this.getFinishGoodId()).subscribe(fg_data =>{
                this.setFinishGood(fg_data);
                this.setFinishGoods(this.getFinishGood());
              });//subscribe fg
          }//loop through deliverables of Estimate
        });//subscribe Estimate
      }//if
    });//estimate id through url
  }//ngOnInit

  setEstimateId(id : any){
    this.estimate_id = id;
  }//setEstimateId
  setEstimate(estimate_data : any){
    this.estimate = new SalesOrder(estimate_data);
  }//setEstimate
  setFinishGoodId(id : any){
    this.fg_id = id;
  }//setFinishGood
  setFinishGood(fg_data : any){
    this.finishgood = new FinishedGood(fg_data);
  }//setFinishGood
  setFinishGoods(finishgood : FinishedGood){
    this.finished_goods.add(finishgood);
  }//setFinishedGoods
  setDataStatus(flag : boolean){this.data_status =flag;}//setDataStatus
  getDataStatus():boolean{return this.data_status;}//getDataStatus
  getFinishedGoods():List<FinishedGood>{return this.finished_goods;}//getFinishedGood
  getFinishGood():FinishedGood{return this.finishgood;}//getFinishGood
  getFinishGoodId(): any{return this.fg_id;}//getFinishedGoodId
  getEstimate():SalesOrder{return this.estimate;}//getEstimate
  getEstimateId():any{return this.estimate_id;}

}
