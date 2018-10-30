import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart: [0];
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'bar',
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
              data: [15, 10, 5, 2, 20],
          }]
      },
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
  });
  }

}
