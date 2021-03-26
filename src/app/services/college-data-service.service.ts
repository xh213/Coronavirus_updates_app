import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { CollegeDataSummary } from '../models/college-data';


@Injectable({
  providedIn: 'root'
})
export class CollegeDataServiceService {

  private collegeDataUrl = `https://raw.githubusercontent.com/nytimes/covid-19-data/master/colleges/colleges.csv`

  constructor(private http: HttpClient) { }

  getCollegeGlobalData() {
    return this.http.get(this.collegeDataUrl,{responseType: 'text'}).pipe(
      map(result=>{

        let collegeData: CollegeDataSummary[] = [];

        let rows = result.split('\n');
        // console.log('here are the rows- '+rows)

        // college-cases
        let raw = {}

        rows.splice(0, 1);

        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)

          let col_cases = {
            state: cols[1],
            county: cols[2],
            city: cols[3],
            college: cols[5],
            confirmed: parseInt(cols[6])
          };

          let temp: CollegeDataSummary = raw[col_cases.college];

          if(temp){
            // different colleges -> cases
            temp.confirmed = col_cases.confirmed + temp.confirmed;

            raw[col_cases.college] = temp;
          }else{
            raw[col_cases.college] = col_cases;
          }
        })

        // console.log('raw='+raw)

        return <CollegeDataSummary[]>Object.values(raw);
      })
    )
  }

}
