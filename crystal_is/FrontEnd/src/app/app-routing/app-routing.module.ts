import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LogInComponent } from '../log-in/log-in.component';

const app_routes=[
  {
    path:"",
    component:LogInComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(app_routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const app_routing_components=[LogInComponent];
