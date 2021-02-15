import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  datatable = []
  raw: any

  @ViewChild('pieChart') pieChart: ElementRef;
  drawChart = () => {

    const data = google.visualization.arrayToDataTable(this.datatable);

    const options = {
      // title: 'Pie Cart',
      legend: {position: 'top'},
      width: 700,
      height: 350,
      animation:{
                duration: 1000,
                easing: 'out',
              },
      backgroundColor: '#A9A9A9',
      is3D: true,

    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

    chart.draw(data, options);
  }
  constructor(private coronaService: CoronaService) { }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }



  ngOnInit(): void {

    this.coronaService.getContinent().subscribe((data) => {
            this.datatable.push(['Continent','Confirmed'])
            this.raw = data

            this.raw.forEach(cont=>{
               this.datatable.push([cont.continent,+cont.cases])
            })
          })


  }



}
// export class PieChartComponent implements OnInit {

//   datatable: any = []
//   // datatab = google.visualization.arrayToDataTable(this.datatable)


//   countries: any[] = []
//   country: any
//   confirmed: number
//   recovered: number
//   deaths: number

//   chart ={
//     PieChart : "PieChart",
//     ColumnChart: "ColumnChart",
//     LineChart: "LineChart",
//     height: 500,
//     options: {
//       animation:{
//         duration: 1000,
//         easing: 'out',
//       },
//       is3D: true,
//     }
//   }

//   title = 'Browser market shares at a specific website, 2014';
//    type = 'PieChart';
//    data = this.datatable;
//    columnNames = ['Browser', 'Percentage'];

//    width = 550;
//    height = 400;


//   raw: any

//   constructor(private coronaService: CoronaService) {}

//   ngOnInit(): void {

//     // this.coronaService.getCountries().subscribe((data) => {

//     //   this.raw = data;
//     //   this.raw.forEach(cont=>{
//     //     this.countries.push([cont.Country])
//     //   })

//     //   // console.log('Countries '+this.countries)
//     //   // console.log('Countries '+this.countries[0])

//     //   this.countries.forEach(cont=>{
//     //     // this.country = cont;

//     //     this.coronaService.getCoronaRealtimeData(cont).subscribe(contdata => {
//     //       // console.log('data for country'+contdata)
//     //       var index = contdata.length - 1
//     //       this.confirmed = contdata[index].Confirmed

//     //       this.datatable.push([cont,contdata[index].Confirmed])
//     //     })

//     //   })
//     //   console.log('typee herez!!!!!!! = =')
//     //   console.log('this is datatable')
//     //   console.log(this.datatable)

//     // })

//     this.coronaService.getContinent().subscribe((data) => {
//       this.datatable.push(['Continent','Confirmed'])
//       this.raw = data
//       console.log("continents "+data)

//       this.raw.forEach(cont=>{
//         // this.datatable.push([cont.continent, cont.cases])
//         this.datatable.push([cont.continent,+cont.cases])
//       })

//       console.log(this.datatable)
//       // console.log(this.raw1)
//     })

//     // this.initChart()
//   }

//   // initChart() {
//   //   this.datatable = []
//   // }



// }

