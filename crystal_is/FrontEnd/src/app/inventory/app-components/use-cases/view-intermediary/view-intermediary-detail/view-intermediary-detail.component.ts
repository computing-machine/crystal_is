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
import {List} from "../../../../data-models/collection-models/list";

@Component({
  selector: 'app-view-intermediary-detail',
  templateUrl: './view-intermediary-detail.component.html',
  styleUrls: ['./view-intermediary-detail.component.css']
})
export class ViewIntermediaryDetailComponent extends ViewManufacturedItemDetailComponent implements OnInit {

  private composed_finished_goods:List<FinishedGood>;
  private composed_intermediarys:List<Intermediary>;
  private show_finished_goods:boolean;
  private show_intermediarys:boolean;
  private boms:List<BOM>;
  private resultant_boms:List<BOM>;
  private resultant_finished_goods:List<FinishedGood>;
  private resultant_intermediarys:List<Intermediary>;
  private raw_materials:List<RawMaterial>; //for bom creationg

  constructor(private finished_good_service:FinishedGoodService, private intermediary_service:IntermediaryService,private bom_service:BomService ,
    private raw_material_service:RawMaterialService,
   protected unit_service:UnitService, private route:ActivatedRoute, private router:Router) { 
   super();
   this.route.params.subscribe(params=>this.setItemId(params.id));
 }//constructor

 ngOnInit() {
  this.raw_materials=new List<RawMaterial>();
  this.setShowFinishedGoods(false);
  this.setShowIntermediarys(false);
  this.composed_finished_goods=new List<FinishedGood>();
  this.composed_intermediarys=new List<Intermediary>();
  this.setBoms(new List<BOM>());
  
  this.intermediary_service.getIntermediary(this.getItemId()).subscribe(intermediary_data=>{
    this.setItem(new FinishedGood(intermediary_data));
    //in asyn
    this.unit_service.getUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.addToUnits(new Unit(data));
      }//for
      
    });
    this.setDataReady(true);
  });

  this.makeBoms();

}//ngOnInit

 getItemDetail(item_id:Object, given_route:string){
  this.router.navigateByUrl(given_route+item_id);
}//method

showBom(){
  if(this.getItem().getBom()){
    this.setShowIntermediarys(false);
    this.setShowBom(true);
    this.setShowFinishedGoods(false);
  }//if
  else{

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
      this.setShowIntermediarys(false);
      this.setShowBom(true);
      this.setShowFinishedGoods(false);
      });
    
    });
  });
  }//else
}//method

showIntermediarys(){
  if(this.boms.getLength()!=0){
    if(this.resultant_intermediarys.getLength()!=0){
      this.setShowIntermediarys(true);
      this.setShowBom(false);
      this.setShowFinishedGoods(false);
    }//if
    else{
    for(let bom of this.boms){
      for(let inter_compo of bom.getInterCompoList()){
        if(inter_compo.getIntermediary().getId()==this.getItem().getId()){
          this.resultant_boms.add(bom);
        }//if
      }//for
    }//for

    for(let inter of this.composed_intermediarys){
      for(let bom of this.resultant_boms){
        if(bom.getId()==inter.getBomId()){
          this.resultant_intermediarys.add(inter);
        }//if
      }//for
    }//for
    this.resultant_boms=new List<BOM>();
    this.setShowIntermediarys(true);
    this.setShowBom(false);
    this.setShowFinishedGoods(false);
  }//else
  }//if
}//method

showFinishedGoods(){
  if(this.boms.getLength()!=0){
    if(this.resultant_finished_goods.getLength()!=0){
      this.setShowIntermediarys(false);
      this.setShowBom(false);
      this.setShowFinishedGoods(true);
    }//if
    else{
    for(let bom of this.boms){
      for(let inter_compo of bom.getInterCompoList()){
        if(inter_compo.getIntermediary().getId()==this.getItem().getId()){
          this.resultant_boms.add(bom);
        }//if
      }//for
    }//for

    for(let fg of this.composed_finished_goods){
      for(let bom of this.resultant_boms){
        if(bom.getId()==fg.getBomId()){
          this.resultant_finished_goods.add(fg);
        }//if
      }//for
    }//for
    this.resultant_boms=new List<BOM>();
    this.setShowIntermediarys(false);
    this.setShowBom(false);
    this.setShowFinishedGoods(true);
  }//else
  }//if
}//method

makeBoms(){
  this.resultant_boms=new List<BOM>();
  this.resultant_finished_goods=new List<FinishedGood>();
  this.resultant_intermediarys=new List<Intermediary>();

  this.finished_good_service.getFinishedGoods().subscribe(finished_good_data=>{
    for(let data of finished_good_data){
      this.composed_finished_goods.add(new FinishedGood(data));
    }//for

  //inside asyn
  this.raw_material_service.getRawMaterials().subscribe(raw_material_data=>{
    for(let data of raw_material_data){
      this.raw_materials.add(new RawMaterial(data));
    }//for

      //inside asyn
      this.intermediary_service.getIntermediarys().subscribe(intermediary_data=>{
        for(let data of intermediary_data){
          this.composed_intermediarys.add(new Intermediary(data));
        }//for

        //inside asyn
        this.bom_service.getBoms().subscribe(bom_data=>{
          for(let data of bom_data){
            this.boms.add(new BOM(data, this.raw_materials, this.composed_intermediarys));
          }//for
          
        });
      });
    });
  });
}//method

  //accessors
  getShowFinishedGoods():boolean{return this.show_finished_goods;}
  getShowIntermediarys():boolean{return this.show_intermediarys;}
  getBoms():List<BOM>{return this.boms;}

  //mutators
  setShowFinishedGoods(value:boolean):void{this.show_finished_goods=value;}
  setShowIntermediarys(value:boolean):void{this.show_intermediarys=value;}
  setBoms(boms:List<BOM>):void{this.boms=boms;}

}//class ends
