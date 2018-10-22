import { Component, OnInit, Input } from '@angular/core';
import { NonProcessLineItem } from '../../../data-models/business-models/non-process-line-item';
import { NonProcessLineItemService } from '../../../data-services/non-process-line-item/non-process-line-item.service';
import {Router} from "@angular/router";
import { NonProcessLineItemData } from '../../../data-models/json-models/non-process-line-item-data';

@Component({
  selector: 'app-deactivate-non-process-line-item',
  templateUrl: './deactivate-non-process-line-item.component.html',
  styleUrls: ['./deactivate-non-process-line-item.component.css']
})
export class DeactivateNonProcessLineItemComponent implements OnInit {
  @Input() target_rm_id:object;
  private rm_data:NonProcessLineItemData;
  private data_ready:boolean;

  constructor(private router:Router, private rm_service:NonProcessLineItemService) { }

  ngOnInit() {
    this.data_ready=false;
    this.rm_service.getNonProcessLineItem(this.target_rm_id).subscribe(data=>{
      this.rm_data=data;
      this.data_ready=true;
    })
  }//ngOnInit

  deactivateRawMaterial(){
    this.rm_data.status="inactive";

    this.rm_service.updateNonProcessLineItem(this.target_rm_id, this.rm_data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/NonProcessLineItems");
    });
  }//method

}//class ends
