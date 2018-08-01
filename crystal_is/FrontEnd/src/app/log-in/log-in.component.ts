import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.setShowLogIn(true);
  }//ngOnInit

  logIn(){
    if(this.getInputUsername()=="i" && this.getInputPassword()=="i"){
      this.router.navigateByUrl("/Inventory");
    }//if
    else if(this.getInputUsername()=="pur" && this.getInputPassword()=="pur"){
      this.router.navigateByUrl("/Purchase");
    }//else
    else if(this.getInputUsername()=="pay" && this.getInputPassword()=="pay"){
      this.router.navigateByUrl("/Payroll");
    }//else
    else if(this.getInputUsername()=="s" && this.getInputPassword()=="s"){
      this.router.navigateByUrl("/Sales");
    }//else
  }//method

  getInputUsername():string{return this.input_username;}
  getInputPassword():string{return this.input_password;}

  setShowLogIn(given_value:boolean):void{this.show_log_in=given_value;}
  getShowLogIn():boolean{return this.show_log_in;}

  //data members
  private input_username:string;
  private input_password:string;
  private show_log_in:boolean;

}//class ends
