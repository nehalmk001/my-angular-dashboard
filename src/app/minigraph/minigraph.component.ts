import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-minigraph',
  templateUrl: './minigraph.component.html',
  styleUrls: ['./minigraph.component.css']
})
export class MinigraphComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={

      chart: {
        backgroundColor:'#000000',
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
        }
    },
    credits:{
      enabled:false
    },
    title: {
        text: 'Sales Static',
        align: 'center'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'sales',
        data: [
            ['product 1', 23],
            ['product 2', 18],
            ['product 3',12,],
            ['product 4', 9],
            ['product 5', 8],
            ['product 6', 30]
        ]
    }]

    }
  }
  
}
