import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoronaService } from '../services/corona.service';
declare var google: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private coronaService: CoronaService) { }
  ngOnInit(): void {
  }


  // title = 'Confirmed (in millions)';
  //  type = 'BarChart';
  //  data = [
  //     ["2012", 900],
  //     ["2013", 1000],
  //     ["2014", 1170],
  //     ["2015", 1250],
  //     ["2016", 1530]
  //  ];
  //  columnNames = ['Year', 'Asia'];
  //  options = { };
  //  width = 550;
  //  height = 400;


  datatable = []
  raw: any

  @ViewChild('lineChart') lineChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    const options = {
      title: 'Line Chart',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    const chart = new google.visualization.LineChart(this.lineChart.nativeElement);
    chart.draw(data, options);
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(this.drawChart);
  }


}
