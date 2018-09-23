import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory-sidebar',
  templateUrl: './inventory-sidebar.component.html',
  styleUrls: ['./inventory-sidebar.component.css']
})
export class InventorySidebarComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.storage.set("items", undefined);
    this.storage.set("units", undefined);
    this.router.navigateByUrl("/");
  }//logOut

}
