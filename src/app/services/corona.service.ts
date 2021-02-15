import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  datatable = []

  country: any;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }

  getCoronaRealtimeData(country): Observable<any>{
    const url =  `https://api.covid19api.com/total/dayone/country/${country}`
    this.country = country
    return this.http.get<any>(url);
  }

  getWorldRealTimeData(): Observable<any>{
    const url = `https://api.covid19api.com/summary`
    return this.http.get<any>(url);
  }

  getContinent(): Observable<any>{
    const url = `https://corona.lmao.ninja/v2/continents?yesterday&sort`
    return this.http.get<any>(url);
  }

  // getCities(country, city): Observable<any>{
  //   const url = `https://api.covid19api.com/total/${country}/${city}`
  //   return this.http.get<any>(url);
  // }

  getWorldData(): Observable<any>{
    const url = `https://api.covid19api.com/world/total`
    return this.http.get<any>(url)
  }

}
