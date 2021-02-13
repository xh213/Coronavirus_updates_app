import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


  datatable: any = []

  countries: any[] = []
  country: any
  confirmed: number
  recovered: number
  deaths: number

  chart={
    PieChart: "PieChart",
    height: 500,
    options: {
      height: 500,
      animation:{
        duration: 1000,
        easing: 'out'
      }
  }

  }

  title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
   data = this.datatable;
   columnNames = ['Browser', 'Percentage'];

   width = 550;
   height = 400;


  raw: any

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {

    // this.coronaService.getCountries().subscribe((data) => {

    //   this.raw = data;
    //   this.raw.forEach(cont=>{
    //     this.countries.push([cont.Country])
    //   })

    //   // console.log('Countries '+this.countries)
    //   // console.log('Countries '+this.countries[0])

    //   this.countries.forEach(cont=>{
    //     // this.country = cont;

    //     this.coronaService.getCoronaRealtimeData(cont).subscribe(contdata => {
    //       // console.log('data for country'+contdata)
    //       var index = contdata.length - 1
    //       this.confirmed = contdata[index].Confirmed

    //       this.datatable.push([cont,contdata[index].Confirmed])
    //     })

    //   })
    //   console.log('typee herez!!!!!!! = =')
    //   console.log('this is datatable')
    //   console.log(this.datatable)

    // })

    this.coronaService.getContinent().subscribe((data) => {
      this.raw = data
      console.log("continents "+data)

      this.raw.forEach(cont=>{
        // this.datatable.push([cont.continent, cont.cases])
        this.datatable.push(new Array(cont.continent,cont.cases))
      })

      console.log(this.datatable)
      // console.log(this.raw1)
    })


  }



}

