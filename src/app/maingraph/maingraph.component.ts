import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-maingraph',
  templateUrl: './maingraph.component.html',
  styleUrls: ['./maingraph.component.css']
})
export class MaingraphComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={

      chart: {
        backgroundColor:'#000000',
        type: 'spline',
    },
    credits:{
        enabled:false
    },
    title: {
        text: 'Monthly Sale'
    },
    alignTicks:{
        enabled:false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: '1= 1000 sales'
        },
        gridLineWidth:0,
        labels: {
            format: '{value}'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Product',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4
        }, 22.8, 17.5, 12.1, 17.6]

    }]

    }
  }

}
