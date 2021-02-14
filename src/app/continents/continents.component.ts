import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  raw : any
  datatable: any[] = []
  asia: number;
  europe: number;
  namerica: number;
  samerica: number;
  aust: number;
  africa: number;
  
  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getContinent().subscribe(data=>{
      this.raw = data
      // console.log("continents "+data)

      this.raw.forEach(cont=>{
        // this.datatable.push([cont.continent, cont.cases])

        if(cont.continent === 'Asia'){
          this.asia = cont.cases
        }

        else if( cont.continent === 'North America') {
          this.namerica = cont.cases
        }

        else if( cont.continent === 'South America' ) {
          this.samerica =cont.cases
        }
        else if( cont.continent === 'Europe' ) {
          this.europe = cont.cases
        }
        else if( cont.continent === 'Africa' ) {
          this.africa = cont.cases
        }
        else if( cont.continent === 'Australia/Oceania' ) {
          this.aust = cont.cases
        }

        this.datatable.push(new Array(cont.continent,cont.cases))
      })
    })
  }



}
