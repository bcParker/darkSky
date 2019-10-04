import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  lat: number;
  long: number;
  localWeather: Observable<any>;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    } else {
      this.lat = 40.0428;
      this.long = 86.1275;
    }
  }
  getWeather() {
    this.weather.currentWeather(this.lat, this.long).subscribe(data => console.log(data))
  }

  weatherIcon(icon) {
    switch(icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy'
      case 'clear-day':
        return 'wi wi-day-sunny'
      case 'partly-cloudy-night':
        return 'wi wi-night-cloudy'
      case 'clear-night':
        return 'wi wi-night-clear'
      case 'rain': 
        return 'wi wi-day-rain'
      case 'snow':
        return 'wi wi-day-snow'
      case 'sleet':
        return 'wi wi-day-sleet'
      case 'wind':
        return 'wi wi-day-cloudy'
      case 'fog':
        return 'wi wi-day-fog'
      case 'cloudy':
        return 'wi wi-day-cloudy'
      default: 
        return 'wi wi-day-sunny'
    }
  }

}
