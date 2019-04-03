import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCityName(city: string, countryCode?: string, metric: 'metric' | 'imperial' = 'metric'): Subject<any> {
    const dataResult = new Subject<any>();

    this.http.get(
      `${environment.openweathermapurl}/weather?q=${city},${countryCode}&units=${metric}&appid=${environment.apiKey}`)
      .subscribe( (data) => {
        dataResult.next(data);
      }, (err) => {
        console.log(err);
    });

    return dataResult;
  }

  getForecast(city: string, countryCode?: string, metric: 'metric' | 'imperial' = 'metric'): Subject<Array<any>> {
    const dataResult = new Subject<Array<any>>();

    this.http.get(
      `${environment.openweathermapurl}/forecast?q=${city},${countryCode}&units=${metric}&appid=${environment.apiKey}`)
      .subscribe((weather: any) => {
        dataResult.next(weather.list);
      }, (err) => {
        console.log(err);
      });

    return dataResult;
  }
}
