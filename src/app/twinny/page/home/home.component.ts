import { Component, OnInit } from '@angular/core';
import {  DataService } from './../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  public drink: any;
  public currency : any[] = [];
  public chartOptions: any


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData()
    this.initChart()
  }

  getData(): void {
    this.dataService.getDrinks(this.url).subscribe(response => {
        this.drink = response;
        this.currency.push(this.drink.bpi.EUR)
        this.currency.push(this.drink.bpi.GBP)
        this.currency.push(this.drink.bpi.USD)
        console.log(this.currency)
    });
}

 initChart(): void {
  this.chartOptions = {
	  animationEnabled: true,
	  exportEnabled: true,
	  title: {
		text: "World Currencies Rates"
	  },
	  axisY: {
		prefix: "$"
	  },
	  toolTip: {
		shared: true,
		content: "{name}: ${y}"
	  },
	  legend: {
		fontSize: 13
	  },
	  data: [
		{
		  type: "splineArea",
		  showInLegend: true,
		  name: "USD",
		  markerSize: 0,
		  color: "rgba(54,158,173,.9)",
		  dataPoints: [
			{x: new Date(2022, 12), y: 3000000},
			{x: new Date(2020, 1), y: 3500000},
			{x: new Date(2020, 2), y: 3000000},
			{x: new Date(2020, 3), y: 3040000},
			{x: new Date(2020, 4), y: 2090000},
			{x: new Date(2020, 5), y: 3100000},
			{x: new Date(2020, 6), y: 3020000},
			{x: new Date(2020, 7), y: 3000000},
			{x: new Date(2020, 8), y: 3300000},
			{x: new Date(2020, 9), y: 3800000},
			{x: new Date(2020, 10), y: 3890000},
			{x: new Date(2020, 11),  y: 3900000}
		  ]
		},
		{
		  type: "splineArea",
		  showInLegend: true,
		  name: "GBR",
		  markerSize: 0,
		  color: "rgba(134,180,2,.9)",
		  dataPoints: [
			{x: new Date(2020, 0), y: 2010000},
			{x: new Date(2020, 1), y: 1600000},
			{x: new Date(2020, 2), y: 1400000},
			{x: new Date(2020, 3), y: 1800000},
			{x: new Date(2020, 4), y: 1800000},
			{x: new Date(2020, 5), y: 2100000},
			{x: new Date(2020, 6), y: 2200000},
			{x: new Date(2020, 7), y: 2500000},
			{x: new Date(2020, 8), y: 2300000},
			{x: new Date(2020, 9), y: 2500000},
			{x: new Date(2020, 10), y: 2600000},
			{x: new Date(2020, 11), y: 2500000}
		  ]
		},
		{
		  type: "splineArea",
		  showInLegend: true,
		  name: "EUR",
		  markerSize: 0,
		  color: "rgba(194,70,66,.9)",
		  dataPoints: [
			{x: new Date(2020, 0), y: 1010000},
			{x: new Date(2020, 1), y: 600000},
			{x: new Date(2020, 2), y: 340000},
			{x: new Date(2020, 3), y: 400000},
			{x: new Date(2020, 4), y: 900000},
			{x: new Date(2020, 5), y: 390000},
			{x: new Date(2020, 6), y: 420000},
			{x: new Date(2020, 7), y: 500000},
			{x: new Date(2020, 8), y: 1430000},
			{x: new Date(2020, 9), y: 1230000},
			{x: new Date(2020, 10), y: 830000},
			{x: new Date(2020, 11), y: 630000}
		  ]
		},

	  ]
	}
}

}

