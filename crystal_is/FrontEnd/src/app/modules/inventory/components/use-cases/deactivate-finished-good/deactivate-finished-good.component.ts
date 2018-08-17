import { Component, OnInit, Input } from '@angular/core';
import { FinishedGoodService } from '../../../data-services/finished-good/finished-good.service';
import {Router} from "@angular/router";
import { FinishedGood } from '../../../data-models/business-models/finished-good';
import { FinishedGoodData } from '../../../data-models/json-models/finished-good-data';

@Component({
  selector: 'app-deactivate-finished-good',
  templateUrl: './deactivate-finished-good.component.html',
  styleUrls: ['./deactivate-finished-good.component.css']
})
export class DeactivateFinishedGoodComponent implements OnInit {
  @Input() target_fg_id:object;
  private fg_data:FinishedGoodData;
  private data_ready:boolean;
  constructor(private router:Router, private fg_service:FinishedGoodService) { }

  ngOnInit() {
    this.data_ready=false;
    this.fg_service.getFinishedGood(this.target_fg_id).subscribe(data=>{
      this.fg_data=data;
      this.data_ready=true;
    })
  }//ngOnInit

  deactivateFinishedGood(){
    this.fg_data.status="inactive";

    this.fg_service.updateFinishedGood(this.target_fg_id, this.fg_data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/FinishedGoods");
    });
  }//method

}//class ends
