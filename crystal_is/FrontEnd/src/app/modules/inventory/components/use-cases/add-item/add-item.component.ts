import { Component, OnInit } from '@angular/core';
import {AddRawMaterialComponent} from "../add-raw-material/add-raw-material.component";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setNewRm(false);
    this.setNewInter(false);
    this.setNewFg(false);
  }

  onChangeSelect(value:string){
    if(value=="Raw material"){
      this.setNewRm(true);
      this.setNewInter(false);
      this.setNewFg(false);
    }//if
    else if(value=="Finished good"){
      this.setNewFg(true);
      this.setNewRm(false);
      this.setNewInter(false);
    }//if
    else if(value=="Intermediary"){
      this.setNewInter(true);
      this.setNewRm(false);
      this.setNewFg(false);
    }//if
  }//onChangeSelect

  //mutators
  setNewRm(value:boolean){this.new_rm=value;}
  setNewFg(value:boolean){this.new_fg=value;}
  setNewInter(value:boolean){this.new_inter=value;}

  //accessors
  getNewRm(){return this.new_rm;}
  getNewFg(){return this.new_fg;}
  getNewInter(){return this.new_inter;}

  //data members
  private new_rm:boolean;
  private new_fg:boolean;
  private new_inter:boolean;

}//class ends
