import { Component, OnInit } from '@angular/core';
import {ViewNonManufacturedItemDetailComponent} from "../../view-item/view-non-manufactured-item-detail/view-non-manufactured-item-detail.component";
import { UnitService } from '../../../../data-services/unit/unit.service';
import { ActivatedRoute } from '@angular/router';
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../../../app-data-models/collection-models/list";
import { PurchaseHistory } from '../../../../data-models/business-models/purchase-history';
import {PurchaseHistoryService} from "../../../../data-services/purchase-history/purchase-history.service";
import {Router} from "@angular/router";
import { NonProcessLineItem } from '../../../../data-models/business-models/non-process-line-item';
import { NonProcessLineItemService } from '../../../../data-services/non-process-line-item/non-process-line-item.service';

@Component({
  selector: 'app-retrieve-non-process-line-item-detail',
  templateUrl: './retrieve-non-process-line-item-detail.component.html',
  styleUrls: ['./retrieve-non-process-line-item-detail.component.css']
})
export class RetrieveNonProcessLineItemDetailComponent extends ViewNonManufacturedItemDetailComponent implements OnInit {

  private raw_material:NonProcessLineItem;

  constructor(private unit_service:UnitService, private raw_material_service:NonProcessLineItemService, 
    private route:ActivatedRoute, private purchase_history_service:PurchaseHistoryService,
     protected router:Router) { 
    super(router);
    this.route.params.subscribe(params=>this.setItemId(params.id));
  }

  ngOnInit() {
    this.setShowPurchaseHistory(false);

    this.raw_material_service.getNonProcessLineItem(this.getItemId()).subscribe(data=>{
      this.setItem(new NonProcessLineItem(data));

      //in asyn
      this.unit_service.getUnits().subscribe(units_data=>{
        for(let data of units_data){
          this.addToUnits(new Unit(data));
        }//for
        this.setDataReady(true);
      });
    });

  }//ngOnInit

  showActions(){
    if(!this.getShowActions()){
      this.setShowActions(true);
      this.setShowPurchaseHistory(false);
    }//if
    else{
      this.setShowActions(false);
      this.setShowPurchaseHistory(false);
    }//else
  }//mehtod

  showPurchaseHistory(){
    if(this.getItem().getPurchaseHistory()){
      this.setShowPurchaseHistory(true);
    }//if
    else{
    this.purchase_history_service.getPurchaseHistory(this.getItem().getPurchaseHistoryId()).subscribe(data=>{
      this.getItem().setPurchaseHistory(new PurchaseHistory(data));
      this.setShowPurchaseHistory(true);
    });
  }//else
  }//mehtod

  //private function
  getUnitName(unit_id:Object, Units:List<Unit>):string{
    for(let unit of Units){
      if(unit.getId()==unit_id){
        return unit.getName();
      }//if
    }//for
  }//function

}//class ends
