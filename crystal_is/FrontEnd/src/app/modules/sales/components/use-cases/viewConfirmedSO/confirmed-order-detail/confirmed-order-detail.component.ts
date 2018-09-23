import { Component, OnInit } from '@angular/core';
import {OrderDetailComponent} from '../../viewOrders/order-detail/order-detail.component'
import {ActivatedRoute} from '@angular/router';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import {Route} from '@angular/router';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {UnitService} from '../../../../../inventory/data-services/unit/unit.service';


@Component({
  selector: 'app-confirmed-order-detail',
  templateUrl: './confirmed-order-detail.component.html',
  styleUrls: ['./confirmed-order-detail.component.css']
})
export class ConfirmedOrderDetailComponent extends OrderDetailComponent implements OnInit {

  constructor(public route : ActivatedRoute,public SO_service : SalesOrderService,
    public FG_service : FinishedGoodService,public cusService : CustomerService,
     public unit_ser : UnitService) {
      super(route,SO_service,FG_service,cusService,unit_ser);
      }

  ngOnInit() {
    this.setOrder();
  }

}
