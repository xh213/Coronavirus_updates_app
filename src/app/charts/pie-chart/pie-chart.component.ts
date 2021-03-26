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
