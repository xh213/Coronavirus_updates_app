import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

import * as Highcharts from "highcharts";
import { Options } from "highcharts";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  countries: any[] = []
  country: any
  confirmed: number
  recovered: number
  deaths: number

  @Input('datatable')
  datatable = []

  raw: any
  // raw1: any[] =[
  //   ["North America", 31805182],
  //   ["Asia", 23708691],
  //   ["South America", 16550781],
  //   ["Europe", 31551998],
  //   ["Africa", 3712855],
  //   ["Australia/Oceania", 50444]
  // ]



  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {

    // this.coronaService.getCountries().subscribe((data) => {

    //   this.raw = data;
    //   this.raw.forEach(cont=>{
    //     this.countries.push([cont.Country])
    //   })

    //   console.log('Countries '+this.countries)
    //   console.log('Countries '+this.countries[0])

    //   this.countries.forEach(cont=>{
    //     // this.country = cont;

    //     this.coronaService.getCoronaRealtimeData(cont).subscribe(contdata => {
    //       console.log('data for country'+contdata)
    //       var index = contdata.length - 1
    //       this.confirmed = contdata[index].Confirmed
    //       this.datatable.push([cont,contdata[index].Confirmed])
    //     })

    //   })
    //   console.log('this is datatable')
    //   console.log(this.datatable)

    // })

    // this.coronaService.getContinent().subscribe((data) => {
    //   this.raw = data
    //   console.log("continents "+data)

    //   this.raw.forEach(cont=>{
    //     // this.datatable.push([cont.continent, cont.cases])
    //     this.datatable.push(new Array(cont.continent,cont.cases))
    //   })

    //   // console.log(this.datatable)
    //   // console.log(this.raw1)



    // })
  }


  chartOptions:Options = {

    chart : {
      plotBorderWidth: null,
      plotShadow: false
   },
   title : {
      text: 'Continents'
   },
    tooltip : {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
             enabled: true,
             format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             style: {
                color:'black'
             }
          }
       }
    },
   series : [{
      type: 'pie',
      name: 'continents',
      data: this.datatable
   }]

  }

  

  pieChart = new Chart(this.chartOptions)




}

