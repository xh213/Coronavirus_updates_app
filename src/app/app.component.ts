// import { pieChartOptions } from './helpers/pieChartOptions';
// import { donutChartsOptions } from './helpers/donutChartsOptions';
import { CoronaService } from './services/corona.service';
import { Component, OnInit } from '@angular/core';
// import { areaChartOptions } from './helpers/areaChartsOptions';
// import { barChart } from './helpers/barChartsOptions';
// import { oneLineBar } from './helpers/oneLineBarOptions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  countries: any[] = []
  datatable = []
  raw: any
  country: any
  confirmed: number
  recovered: number
  deaths: number

  title = 'covid-api';

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void
  {



    this.coronaService.getContinent().subscribe((data) => {
      this.raw = data
      console.log("continents "+data)

      this.raw.forEach(cont=>{
        // this.datatable.push([cont.continent, cont.cases])
        this.datatable.push(new Array(cont.continent,cont.cases))
      })

      console.log("this is datatable" + this.datatable)

    })


    this.coronaService.getCountries().subscribe(data=>{
      // console.log('data in app component'+data)
      this.countries = data
    })

  }

  getCoronaData(){
    // alert(this.country)
    this.coronaService.getCoronaRealtimeData(this.country).subscribe((data) => {
      // console.log(data)
      var index = data.length - 1
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths
    })
  }

  getCountry(country: any){
    this.country = country // country that user selected

  }






}
