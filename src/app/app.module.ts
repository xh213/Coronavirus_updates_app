import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContinentsComponent } from './continents/continents.component';
import { CollegeComponent } from './college/college.component';
import { CollegeCasesComponent } from './college-cases/college-cases.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    NavBarComponent,
    ContinentsComponent,
    CollegeComponent,
    CollegeCasesComponent,
    LineChartComponent,
    BarChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
