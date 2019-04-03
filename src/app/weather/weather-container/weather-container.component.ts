import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

  searchForm: FormGroup;


  constructor( private fb: FormBuilder  ) {
    this.searchForm = fb.group({
      cityName: '',
      countryCode: ''
    });
  }

  ngOnInit() {
  }

}
