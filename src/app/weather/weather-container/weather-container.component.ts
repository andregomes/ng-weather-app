import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { OpenweatherService } from '../openweather.service';

import { Chart } from 'chart.js';

// https://stackblitz.com/edit/angular-tab-portal-outlet
// create tabs for forecast component
@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

  searchForm = this.fb.group({
    cityName: ['', Validators.required],
    countryCode: ['', Validators.required]
  });

  temperatureChart = [];

  constructor(
    private fb: FormBuilder,
    private weatherService: OpenweatherService
  ) {}

  ngOnInit() {
    console.log('Module Weather init');

    this.temperatureChart = new Chart('temperatureChart', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Temperature for the next 5 days',
            data: [15, 22, 19, 21, 23],
            fill: true,
            lineTension: 0.2,
            borderColor: '#bada55',
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: 'Line chart',
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

  }

  submitSearch(): void {
    const city = this.searchForm.value.cityName;
    const countryCode = this.searchForm.value.countryCode;

    if (this.searchForm.invalid) {
      return;
    }

   /*  this.weatherService.getWeatherByCityName(city, countryCode).subscribe((data: any) => {
      console.log(data);
    }); */

    this.weatherService.getForecast(city, countryCode).subscribe( (data: any) => {
      console.log(data);
/*       this.temperatureChart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          dataSets: [{
            label: 'Temperature for the next 5 days',
            data: [15, 22, 19, 21, 23],
            fill: false,
            lineTension: 0.2,
            borderColor: '#bada55',
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: 'Line chart',
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }); */
    });


  }

}
