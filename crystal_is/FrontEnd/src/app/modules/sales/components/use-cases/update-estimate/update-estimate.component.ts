import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';
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

  constructor(private route : ActivatedRoute,private Order_service :SalesOrderService,
              private fg_service :FinishedGoodService,private unit_service :UnitService,
              private cus_service : CustomerService  ){}//constructor
  ngOnInit() {
    this.setDataStatus(false);
    //private members declaration
    this.deli_detail = new List<FGDetailWithQuantity>();
    // public functions
    this.route.params.subscribe(param=>{
      this.estimateId = param.id;
    });//getestimateId from param
    //SalesOrder Service
    this.Order_service.getSalesOrderById(this.estimateId).subscribe(estimate_data =>{
      this.estimate = new SalesOrder(estimate_data[0]);//setEstimate
      //Customer Service
      this.cus_service.getCustomerById(this.estimate.getCusId()).subscribe(customer_data=>{
        this.customer = new Customer(customer_data);//set Customer
        //loop through deliverables of Estimate
        for(let deliverable of this.estimate.getDeliverables()){
          let fg_id  = deliverable.getFGItemId();//set FGId in deliverable
          //FinishGood servce to get FG item 
          this.fg_service.getFinishedGood(fg_id).subscribe(fg_data=>{
            let fg = new FinishedGood(fg_data)//set FG item
            //Unit service to get Unit of FG item
            this.unit_service.getUnit(fg.getUnitId()).subscribe(unit_data=>{
              let unit = new Unit(unit_data);//set Unit 
              //set Deliverable in Estimate with FG and its detail
              let fg_detail_quantity_obj = new FGDetailWithQuantity(fg,deliverable.getQuantity(),unit);
              //set list of FG and their detail in Estimate 
              this.deli_detail.add(fg_detail_quantity_obj);
            });//get unit through service
          });//get fg through service
        }//getDeliverables
        this.setDataStatus(false);
        this.estimate_deli_detail= new OrderWithDeliverableDetail(this.estimate,this.deli_detail);
        this.setDataStatus(true);
        console.log(this.estimate_deli_detail);
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
    this.fg_service.getFinishedGoods().subscribe(fgs=>{
      this.unit_service.getUnits().subscribe(units_data=>{
        this.units = new List<Unit>();
        for(let unit of units_data){
          this.units.add(new Unit(unit))
        }//for
        this.catalog = new List<FinishedGood>();
        for(let fg of fgs ){
          this.catalog.add(new FinishedGood(fg));
        }//for
        this.setCatalogStatus(true);
      });//get all fgs
      });//get all units from service
  }//getCatalog
}
