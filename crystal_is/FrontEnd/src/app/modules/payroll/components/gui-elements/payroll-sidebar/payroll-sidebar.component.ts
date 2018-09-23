import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-payroll-sidebar',
  templateUrl: './payroll-sidebar.component.html',
  styleUrls: ['./payroll-sidebar.component.css']
})
export class PayrollSidebarComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
private router:Router) { }

  ngOnInit() {
  }//ngOnInit

  logOut(){
    this.storage.set("user_id",undefined);
    this.router.navigateByUrl("/");
  }//logOut

}//class ends
