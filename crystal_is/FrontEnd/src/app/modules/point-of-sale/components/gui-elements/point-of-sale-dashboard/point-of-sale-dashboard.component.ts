import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-point-of-sale-dashboard',
  templateUrl: './point-of-sale-dashboard.component.html',
  styleUrls: ['./point-of-sale-dashboard.component.css']
})
export class PointOfSaleDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }//ngOnInit

  sellProduct(given_route:string){
    this.router.navigateByUrl(given_route);
  }//method

}//component
