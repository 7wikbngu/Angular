import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartValuesService } from '../chart-values.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart: Array<Number> = [];
  values: Array<Number> = [];
  constructor(private chartValues: ChartValuesService) { }

  options = {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Active Users',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        data: this.values
      }]
    },
    fill: false,
    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  ngOnInit() {
    // Generate 5 random numbers through api
    // setTimeout( () => {
    //   this.chartValues.getValues().subscribe( (data) => {
    //     console.log(data);
    //     this.values = data.users;
    //   });
    // }, 10000);
    this.chartValues.getValues().subscribe((data) => {
      console.log(data);
      this.values = data.users[0];
      this.options.data.datasets[0].data = this.values;
      console.log(this.options);
    });

    setTimeout( () => {
      if(this.values === []){
        console.log('Empty');
      }
      this.chart = new Chart('myChart', this.options);
    }, 1000);


  }

}
