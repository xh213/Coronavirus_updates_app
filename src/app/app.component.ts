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

  countrySelected = false;
  upCountry : any;

  totalConfirmed: number
  totalRecovered: number
  totalDeaths: number

  countries: any[] = []
  countriesTable: string[] = []
  // citiesTable: string[] = []
  datatable = []
  raw: any
  country: any
  // city: any
  confirmed: number
  recovered: number
  deaths: number

  // "Country": "Albania",
  // "CountryCode": "AL",
  // "Slug": "albania",
  // "NewConfirmed": 0,
  // "TotalConfirmed": 93075,
  // "NewDeaths": 0,
  // "TotalDeaths": 1555,
  // "NewRecovered": 0,
  // "TotalRecovered": 56764,
  // "Date": "2021-02-15T06:29:59.611Z",

  // Country Data
  NewConfirmed: any
  TotalConfirmed: any
  NewDeaths: any
  TotalDeaths: any
  NewRecovered: any
  TotalRecovered: any
  

  countrySub = false

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

    this.coronaService.getCountries().subscribe(data=>{
      // console.log('data in app component'+data)
      data.forEach(item => {
        this.countriesTable.push(item.Country)
      });

    })

    this.coronaService.getWorldData().subscribe(data=>{
      this.totalConfirmed = data.TotalConfirmed
      console.log(this.totalConfirmed)

      this.totalRecovered = data.TotalRecovered
      console.log(this.totalRecovered)

      this.totalDeaths = data.TotalDeaths
      console.log(this.totalDeaths)
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

    this.countrySelected = !this.countrySelected
    this.getRealtimeWorldData()
  }

  getRealtimeWorldData() {
    this.countrySub = !this.countrySub
    this.coronaService.getWorldRealTimeData().subscribe((data) => {
      this.countries = data.Countries
      // this.countriesTable.push([
      //   'Country', 'Confirmed'
      //   ])
      this.countries.forEach(data=>{
        // this.countriesTable.push([data.Country, data.TotalConfirmed])
        if(data.Country === this.country){
          this.NewConfirmed = data.NewConfirmed
          this.TotalConfirmed = data.TotalConfirmed
          this.NewDeaths = data.NewDeaths
          this.TotalDeaths = data.TotalDeaths
          this.NewRecovered = data.NewRecovered
          this.TotalRecovered = data.TotalRecovered
        }

        console.log("total Deaths"+ this.TotalDeaths)

      })
    })
  }

  getCountry(country: any){

    this.country = country // country that user selected
    this.upCountry = country.charAt(0).toUpperCase()+ country.slice(1);
  }

  barChart = true
  pieChart = true

  showBarChart(){
    this.barChart = !this.barChart;
  }

  showPieChart(){
    this.pieChart = !this.pieChart
  }

  openIt(){
      // the url,html tag should be called from here , how ?
      const URL = "https://www.linkedin.com/in/dilraj-singh-9599861b1/"
      window.open(URL);
  }


  // getCity(city: any) {
  //   this.city = city
  // }

  // getCityData() {}

  //   this.coronaService.getCity(this.country, this.city).subscribe((data) => {
  // }






}
