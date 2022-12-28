import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TwinnyRoutingModule } from './twinny-routing.module';
import { DataService } from './service/data.service';


import { HomeComponent } from './page/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TwinnyRoutingModule

  ],
  providers: [HttpClient,DataService]
})
export class TwinnyModule { }
