import { Component, OnInit } from '@angular/core';
import {ViewManufacturedItemDetailComponent} from "../../view-item/view-manufactured-item-detail/view-manufactured-item-detail.component";
import {FinishedGoodService} from "../../../../data-services/finished-good/finished-good.service";
import {IntermediaryService} from "../../../../data-services/Intermediary/intermediary.service";
import {RawMaterialService} from "../../../../data-services/RawMaterial/raw-material.service";
import {UnitService} from "../../../../data-services/unit/unit.service";
import {BomService} from "../../../../data-services/Bom/bom.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

import {FinishedGood} from "../../../../data-models/business-models/finished-good";
import {RawMaterial} from "../../../../data-models/business-models/raw-material";
import {Unit} from "../../../../data-models/business-models/unit";
import {Intermediary} from "../../../../data-models/business-models/intermediary";
import {BOM} from "../../../../data-models/business-models/bom";
import {List} from "../../../../../../app-data-models/collection-models/list";
import {DeactivateFinishedGoodComponent} from "../../deactivate-finished-good/deactivate-finished-good.component";

@Component({
  selector: 'app-view-finished-good-detail',
  templateUrl: './view-finished-good-detail.component.html',
  styleUrls: ['./view-finished-good-detail.component.css']
})
export class ViewFinishedGoodDetailComponent extends ViewManufacturedItemDetailComponent implements OnInit {

  constructor(private finished_good_service:FinishedGoodService, private intermediary_service:IntermediaryService,private bom_service:BomService ,
     private raw_material_service:RawMaterialService,
    protected unit_service:UnitService, private route:ActivatedRoute, protected router:Router) { 
    super(router);
    this.route.params.subscribe(params=>this.setItemId(params.id));
  }//constructor

  ngOnInit() {
    
    this.finished_good_service.getFinishedGood(this.getItemId()).subscribe(finished_good_data=>{
      this.setItem(new FinishedGood(finished_good_data));
       //in asyn
       this.unit_service.getUnits().subscribe(units_data=>{
        for(let data of units_data){
          this.addToUnits(new Unit(data));
        }//for
      });
      this.setDataReady(true);
    });

  }//ngOnInit

  showBom(){
    //inside asyn
    this.raw_material_service.getRawMaterials().subscribe(raw_material_data=>{
      for(let data of raw_material_data){
        this.addToComposingRawMaterials(new RawMaterial(data));
      }//for

      //inside asyn
      this.intermediary_service.getIntermediarys().subscribe(intermediary_data=>{
        for(let data of intermediary_data){
          this.addToComposingIntermediarys(new Intermediary(data));
        }//for

        //inside asyn
        this.bom_service.getBomById(this.getItem().getBomId()).subscribe(bom_data=>{
          this.setBom(new BOM(bom_data, this.getComposingRawMaterials(), this.getComposingIntermediarys()));
          
        this.getItem().setBom(this.getBom());
        this.setShowBom(true);
        this.setShowActions(false);
        });
      
      });
    });
  }//method

  getItemDetail(item_id:Object, given_route:string){
    this.router.navigateByUrl(given_route+item_id);
  }//method

  showActions(){
    if(!this.getShowActions()){
      this.setShowActions(true);
      this.setShowBom(false);
    }//if
    else{
      this.setShowActions(false);
      this.setShowBom(false);
    }//else
  }//mehtod

}//class ends
