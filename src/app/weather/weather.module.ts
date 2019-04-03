import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenweatherService } from './openweather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WeatherContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    WeatherRoutingModule
  ],
  providers: [OpenweatherService]
})
export class WeatherModule { }
