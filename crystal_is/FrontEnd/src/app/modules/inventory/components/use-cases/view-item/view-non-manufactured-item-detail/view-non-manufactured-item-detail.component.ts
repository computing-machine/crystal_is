import { Component, OnInit } from '@angular/core';
import {ViewItemDetailComponent} from "../view-item-detail/view-item-detail.component";
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../data-models/collection-models/list";
import { PurchaseHistory } from '../../../../data-models/business-models/purchase-history';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-non-manufactured-item-detail',
  templateUrl: './view-non-manufactured-item-detail.component.html',
  styleUrls: ['./view-non-manufactured-item-detail.component.css']
})
export abstract class ViewNonManufacturedItemDetailComponent extends ViewItemDetailComponent implements OnInit {

  private show_purchase_history:boolean;

  constructor(protected router:Router) {
    super(router);
   }//constructor

   ngOnInit() {
    this.setShowPurchaseHistory(false);

  }//ngOnInit

  abstract showPurchaseHistory();

  //accessors
  getShowPurchaseHistory():boolean{return this.show_purchase_history;}

  //mutators
  setShowPurchaseHistory(value:boolean):void{this.show_purchase_history=value;}

}//class ends
