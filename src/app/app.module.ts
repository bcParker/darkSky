import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalWeatherComponent } from './local-weather/local-weather.component';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
