import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
declare var google: any;

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') barChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable(this.countriesTable);
    // const data = google.visualization.arrayToDataTable(
    //   [
    //     ['Element', 'Density', { role: 'style' } ],
    //     ['Copper', 8.94, '#581845'],
    //     ['Silver', 10.49, '#C70039'],
    //     ['Gold', 19.30, '#FFC300'],
    //     ['Platinum', 21.45, '#900C3F']
    //   ]
    // );

    const options = {
      title: 'Bar Chart',
      width: 700,
      height: 350,
      bar: {groupWidth: '95%'},
      legend: { position: 'none' },
    };
    const view = new google.visualization.DataView(data);
    // view.setColumns([0, 1]);
    const chart = new google.visualization.ColumnChart(this.barChart.nativeElement);
    chart.draw(view, options);
  }

  constructor(private coronaService: CoronaService) { }

  countries: any
  countriesTable = []


  ngOnInit(): void {

    this.coronaService.getWorldRealTimeData().subscribe((data) => {
      this.countries = data.Countries
      this.countriesTable.push([
        'Country', 'Confirmed'
        ])
      this.countries.forEach(data=>{

        if(data.TotalConfirmed > 1000000){
          this.countriesTable.push([data.Country, data.TotalConfirmed])
        }

      })
    })

    console.log(this.countriesTable)

  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
}
