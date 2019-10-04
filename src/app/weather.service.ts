import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // weatherURL = `https://api.darksky.net/forecast/5942c2bde83468732e85daa9ee7a12fa/${lat},${long}`

  constructor(private http: HttpClient) { }

  currentWeather(lat: number, long: number): Observable<any> {
    const weatherURL = `https://api.darksky.net/forecast/5942c2bde83468732e85daa9ee7a12fa/${lat},${long}`
    let params = new HttpParams()
    params = params.set('lat', lat.toString())
    params = params.set('long', long.toString())

    return this.http.get(weatherURL, { params })
  }

}



