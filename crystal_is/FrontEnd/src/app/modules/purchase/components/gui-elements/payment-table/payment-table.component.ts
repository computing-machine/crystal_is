import { Component, OnInit, Input } from '@angular/core';
import { List } from "../../../../../app-data-models/collection-models/list";
import { Payment } from '../../../data-models/business-models/payment';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  @Input() private payments:List<Payment>;

  constructor() { }

  ngOnInit() {
  }

}
