import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }//ngOnInit

  exit(given_route:string){
    this.router.navigateByUrl(given_route);
  }//method

}//component
