import { Component, OnInit } from '@angular/core';
import {List} from "../../../data-models/collection-models/list";
import {Vendor} from "../../../data-models/business-models/vendor";
import {VendorService} from "../../../data-services/vendor-service/vendor.service";

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {
  private vendors:List<Vendor>;
  private data_ready:boolean;

  constructor(private vendor_service:VendorService) {
    this.data_ready=false;
    this.vendors=new List<Vendor>();
   }

  ngOnInit() {
    this.vendor_service.getVendors().subscribe(vendor_data=>{
      for(let data of vendor_data){
        this.vendors.add(new Vendor(data));
      }//for
      this.data_ready=true;
    });
  }

}
