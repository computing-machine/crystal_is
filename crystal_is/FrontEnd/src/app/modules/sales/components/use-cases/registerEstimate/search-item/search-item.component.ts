import { Component, OnInit } from '@angular/core';
import {FinishedGood} from '../../../../../inventory/data-models/business-models/finished-good';
import {List} from '../../../../data-models/collection-models/list';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
//private members
private finishGoods : List<FinishedGood>;
private data_status : boolean;
private fgslength : List<number>;
private fg_quanity : number;
private fgcount =0;
private selectedFG : List<any>;
  constructor(private fg : FinishedGoodService, private route : Router) { }

  ngOnInit() {
    //private members declaration
    this.finishGoods = new List<FinishedGood>();
    this.fgslength = new List<number>();
    this.selectedFG = new List<any>();
    this.fg_quanity = 1;

    this.setDataStatus(false);
    this.fg.getFinishedGoods().subscribe(FinishedGoods=>{
      this.setFinishGoods(FinishedGoods);
      this.setDataStatus(true);
    });
  }//ngOnInit

  setDataStatus(status : boolean){
    this.data_status = status;
  }//setDataStatus

  setFinishGoods(FinishedGoods : any){
    for(let fg_data of FinishedGoods){
        let fg = new FinishedGood(fg_data);
        this.finishGoods.add(fg);
        this.setfglength(); 
    }//for
  }//setFinishGoods

  setfglength(){
    this.fgcount++;
    this.fgslength.add(this.fgcount);
  }//setfglength

  setSelectedFGItems(element : any ,item : any,quantity:number){
    if(element.innerHTML=='Select'){
      element.innerHTML = 'Selected';
      let fg = {"fg" : item , "quantity" : quantity}
      this.selectedFG.add(fg);
    }//if
    else if(element.innerHTML == 'Selected'){
      element.innerHTML = 'Select';
      let index = this.selectedFG.IndexOfItem({"fg" : item,"quantity" : quantity});
      this.selectedFG.delete(index);
    }//else if
    this.fg_quanity=1;
  }//setFGItem

  setQuanity(value : any){
    this.fg_quanity = value;
  }//setQuanity


  getDataStatus():boolean{
    return this.data_status;
  }//getDataStatus

  getFinishGoods():List<FinishedGood>{
    return this.finishGoods;
  }//getFinishGoods

  getfglength():List<number>{
    return this.fgslength;
  }//getfgLength

  getQuantity():number{
    return this.fg_quanity;
  }//getQuantity

}
