import { Component, OnInit } from '@angular/core';
import {FinishedGood} from '../../../../inventory/data-models/business-models/finished-good';
import {FinishedGoodService} from '../../../../inventory/data-services/finished-good/finished-good.service';
import {List} from "../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../../inventory/data-models/business-models/unit';
import {UnitService} from '../../../../inventory/data-services/unit/unit.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private data_status : boolean;
  private catalog_status : boolean;
  private catalog : List<FinishedGood>;
  private res_catalog : List<FinishedGood>;
  private units : List<Unit>;
  private pro_name : string;
  private unit_name : string;
  private item_detail_flag : boolean;
  private item_detail : FinishedGood;

  constructor(private fg_service :FinishedGoodService,private unit_service :UnitService) { }

  ngOnInit() {
    this.units = new List<Unit>();

    this.setDataStatus(false);
    this.unit_service.getActiveUnits().subscribe(unit_data=>{
      for(let unit of unit_data){
        this.units.add(new Unit(unit));
      }//for
      this.getCatalog();
      this.setDataStatus(true);
    });//unit service
  }

  setDataStatus(flag : boolean){this.data_status = flag;}//setDataStatus
  setCatalogStatus(flag : boolean){this.catalog_status = flag;}//setCatalogStatus

  itemDetail(item : FinishedGood){
    this.SetitemDetailStatus(false);
   this.item_detail =item;
   this.SetitemDetailStatus(true);
  }//itemDetail

  SetitemDetailStatus(flag : boolean){
    this.item_detail_flag = flag;
  }//itemDetailStatus
  getItemDetailStatus():boolean{return this.item_detail_flag;}

  //...................get Catalog..................
  getCatalog(){
    this.setCatalogStatus(false);
    this.fg_service.getActiveFinishedGoods().subscribe(fgs=>{
        this.catalog = new List<FinishedGood>();
        for(let fg of fgs ){
          this.catalog.add(new FinishedGood(fg));
        }//for
        this.res_catalog  = this.catalog;
        this.setCatalogStatus(true);
      });//get all fgs
  }//getCatalog

  getItems(){
    this.res_catalog = this.catalog;
    if((this.pro_name!=undefined)&&(this.unit_name==undefined)){
      this.res_catalog = this.getByProName();
    }//if
    else if((this.pro_name==undefined)&&(this.unit_name!=undefined)){
      this.res_catalog = this.getByUnitName();
    }//else if
    else if((this.pro_name!=undefined)&&(this.unit_name!=undefined)){
      this.res_catalog = this.getByProName();
      this.res_catalog = this.getByUnitName();
    }//else if
  }//getItems

  getByProName(){
    let products = new List<FinishedGood>();
    for(let item of this.res_catalog){
      if(item.getName().toUpperCase().includes(this.pro_name.toUpperCase())){
        products.add(item);
      }//if
    }//for
    return products;
  }//getByProName

  getByUnitName(){
    let products = new List<FinishedGood>();
    for(let item of this.res_catalog){
      if(item.getUnitName(this.units).toUpperCase().includes(this.unit_name.toUpperCase())){
        products.add(item);
      }//if
    }//for
    return products;
  }//getByUnitName

  getCatalogStatus(){return this.catalog_status;}//getCatalogStatus
  getDataStatus(){return this.data_status;}//getDataStatus

  removeQuantityAlert(input_field : any){
    let parent_div = input_field.parentElement;
    parent_div.childNodes[10].setAttribute("class","hide");
  }//removeQuantityAlert


}
