import { Component, OnInit } from '@angular/core';
import {ViewNonManufacturedItemDetailComponent} from "../../view-item/view-non-manufactured-item-detail/view-non-manufactured-item-detail.component";
import {RawMaterial} from "../../../../data-models/business-models/raw-material";
import {RawMaterialService} from "../../../../data-services/RawMaterial/raw-material.service";
import { UnitService } from '../../../../data-services/unit/unit.service';
import { ActivatedRoute } from '@angular/router';
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../../../app-data-models/collection-models/list";
import { PurchaseHistory } from '../../../../data-models/business-models/purchase-history';
import {PurchaseHistoryService} from "../../../../data-services/purchase-history/purchase-history.service";
import { BomService } from '../../../../data-services/Bom/bom.service';
import { BOM } from '../../../../data-models/business-models/bom';
import {FinishedGood} from "../../../../data-models/business-models/finished-good";
import {FinishedGoodService} from "../../../../data-services/finished-good/finished-good.service";
import {Intermediary} from "../../../../data-models/business-models/intermediary";
import {IntermediaryService} from "../../../../data-services/Intermediary/intermediary.service";
import {Router} from "@angular/router";
import {} from "../../deactivate-raw-material/deactivate-raw-material.component";
import { RawMaterialComponent } from '../../../../data-models/business-models/raw-material-component';
import { IntermediaryComponent } from '../../../../data-models/business-models/intermediary-component';


@Component({
  selector: 'app-view-raw-material-detail',
  templateUrl: './view-raw-material-detail.component.html',
  styleUrls: ['./view-raw-material-detail.component.css']
})
export class ViewRawMaterialDetailComponent extends ViewNonManufacturedItemDetailComponent implements OnInit {
  private raw_material:RawMaterial;
  private raw_materials:List<RawMaterial>;
  private finished_goods:List<FinishedGood>;
  private intermediarys:List<Intermediary>;
  private show_finished_goods:boolean;
  private show_intermediarys:boolean;
  private boms:List<BOM>;
  private resultant_boms:List<BOM>;
  private resultant_finished_goods:List<FinishedGood>;
  private resultant_intermediarys:List<Intermediary>;
  private resultant:List<[FinishedGood, RawMaterialComponent]>;

  constructor(private unit_service:UnitService, private raw_material_service:RawMaterialService, 
    private route:ActivatedRoute, private purchase_history_service:PurchaseHistoryService,
  private bom_service:BomService, private finished_good_service:FinishedGoodService, 
  private intermediary_service:IntermediaryService, protected router:Router) { 
    super(router);
    this.route.params.subscribe(params=>this.setItemId(params.id));
  }

  ngOnInit() {
    this.setShowPurchaseHistory(false);
    this.setShowFinishedGoods(false);
    this.setShowIntermediarys(false);
    this.finished_goods=new List<FinishedGood>();
    this.intermediarys=new List<Intermediary>();
    this.raw_materials=new List<RawMaterial>();
    this.setBoms(new List<BOM>());

    this.raw_material_service.getRawMaterial(this.getItemId()).subscribe(data=>{
      this.setItem(new RawMaterial(data));

      //in asyn
      this.unit_service.getUnits().subscribe(units_data=>{
        for(let data of units_data){
          this.addToUnits(new Unit(data));
        }//for
        this.setDataReady(true);
      });
    });

    this.makeBoms();

  }//ngOnInit

  showActions(){
    if(!this.getShowActions()){
      this.setShowActions(true);
      this.setShowFinishedGoods(false);
      this.setShowIntermediarys(false);
      this.setShowPurchaseHistory(false);
    }//if
    else{
      this.setShowActions(false);
      this.setShowFinishedGoods(false);
      this.setShowIntermediarys(false);
      this.setShowPurchaseHistory(false);
    }//else
  }//mehtod

  showPurchaseHistory(){
    if(this.getItem().getPurchaseHistory()){
      this.setShowFinishedGoods(false);
      this.setShowIntermediarys(false);
      this.setShowPurchaseHistory(true);
    }//if
    else{
    this.purchase_history_service.getPurchaseHistory(this.getItem().getPurchaseHistoryId()).subscribe(data=>{
      this.getItem().setPurchaseHistory(new PurchaseHistory(data));
      this.setShowFinishedGoods(false);
      this.setShowIntermediarys(false);
      this.setShowPurchaseHistory(true);
    });
  }//else
  }//mehtod

  showIntermediarys(){
    if(this.boms.getLength()!=0){
      if(this.resultant_intermediarys.getLength()!=0){
        this.setShowIntermediarys(true);
        this.setShowPurchaseHistory(false);
        this.setShowFinishedGoods(false);
      }//if
      else{
        //get all boms which include this particular raw material
      for(let bom of this.boms){
        for(let rm_compo of bom.getRawMatCompoList()){
          if(rm_compo.getRawMat().getId()==this.getItem().getId()){
            this.resultant_boms.add(bom);
          }//if
        }//for
      }//for

      //find all intermediarys which include any of this bom
      for(let inter of this.intermediarys){
        for(let bom of this.resultant_boms){
          if(bom.getId()==inter.getBomId()){
            this.resultant_intermediarys.add(inter);
          }//if
        }//for
      }//for
      this.resultant_boms=new List<BOM>();
      this.setShowIntermediarys(true);
      this.setShowPurchaseHistory(false);
      this.setShowFinishedGoods(false);
    }//else
    }//if
  }//method

  showFinishedGoods(){
    if(this.boms.getLength()!=0){
      if(this.resultant_finished_goods.getLength()!=0){
        this.setShowIntermediarys(false);
        this.setShowPurchaseHistory(false);
        this.setShowFinishedGoods(true);
      }//if
      else{
      for(let bom of this.boms){
        for(let rm_compo of bom.getRawMatCompoList()){
          if(rm_compo.getRawMat().getId()==this.getItem().getId()){
            //this.resultant_boms.add(bom);
            for(let fg of this.finished_goods){
              if(bom.getId()==fg.getBomId()){
                let temp_array:[FinishedGood, RawMaterialComponent]=[fg, rm_compo];
                this.resultant.add(temp_array);
              }//if
            }//for
          }//if
        }//for
      }//for

      /*
      for(let fg of this.finished_goods){
        for(let bom of this.resultant_boms){
          if(bom.getId()==fg.getBomId()){
            this.resultant_finished_goods.add(fg);

          }//if
        }//for
      }//for
      */
      this.resultant_boms=new List<BOM>();
      this.setShowIntermediarys(false);
      this.setShowPurchaseHistory(false);
      this.setShowFinishedGoods(true);
    }//else
    }//if
  }//method

  makeBoms(){
    this.resultant_boms=new List<BOM>();
    this.resultant_finished_goods=new List<FinishedGood>();
    this.resultant_intermediarys=new List<Intermediary>();
    this.resultant=new List<[FinishedGood, RawMaterialComponent]>();

    this.finished_good_service.getFinishedGoods().subscribe(finished_good_data=>{
      for(let data of finished_good_data){
        this.finished_goods.add(new FinishedGood(data));
      }//for

      //inside asyn
      this.raw_material_service.getRawMaterials().subscribe(raw_material_data=>{
        for(let data of raw_material_data){
          this.raw_materials.add(new RawMaterial(data));
        }//for

        //inside asyn
        this.intermediary_service.getIntermediarys().subscribe(intermediary_data=>{
          for(let data of intermediary_data){
            this.intermediarys.add(new Intermediary(data));
          }//for

          //inside asyn
          this.bom_service.getBoms().subscribe(bom_data=>{
            for(let data of bom_data){
              this.boms.add(new BOM(data, this.raw_materials, this.intermediarys));
            }//for
            
          });
        
        });
      });
    });
  }//method

  getItemDetail(item_id:Object, given_route:string){
    this.router.navigateByUrl(given_route+item_id);
  }//method

  //accessors
  getShowFinishedGoods():boolean{return this.show_finished_goods;}
  getShowIntermediarys():boolean{return this.show_intermediarys;}
  getBoms():List<BOM>{return this.boms;}

  //mutators
  setShowFinishedGoods(value:boolean):void{this.show_finished_goods=value;}
  setShowIntermediarys(value:boolean):void{this.show_intermediarys=value;}
  setBoms(boms:List<BOM>):void{this.boms=boms;}

  //private function
  getUnitName(unit_id:Object, Units:List<Unit>):string{
    for(let unit of Units){
      if(unit.getId()==unit_id){
        return unit.getName();
      }//if
    }//for
  }//function

}//class ends
