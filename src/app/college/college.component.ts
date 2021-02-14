import { CollegeDataServiceService } from './../services/college-data-service.service';
import { Component, OnInit } from '@angular/core';
import { CollegeDataSummary } from '../models/college-data';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {


   // College Students
   totalColConfirmed = 0;
   mason = 0;
   uva = 0;
   vcu = 0;
   jmu = 0;
   vtech = 0;
   umw = 0;
   odu = 0;


   totalConfirmed = 0;
   totalActive = 0;
   totalDeaths = 0;
   totalRecovered = 0;

   collegeData: CollegeDataSummary[];
   countries: string[] = [];
   colleges: string[] = [];

   totalCollegeCases = 0;
   totalCollege = 0;
   college: string;
   state: string;
   county: string;
   city: string;

   selectedValue = false

  constructor(private collegeService: CollegeDataServiceService) { }

  ngOnInit(): void {

    // this.collegeService.getCollegeGlobalData()
    // .subscribe({
    //   next : (result)=>{

    //     this.collegeData = result
    //     result.forEach(col=>{

    //     })

    //   }
    // })

    // console.log('countries ='+this.countries)

    this.collegeService.getCollegeGlobalData()
    .subscribe(result=>{
      this.collegeData = result;
      this.collegeData.forEach(state=>{
        this.colleges.push(state.college)
      })
    })

    this.collegeService.getCollegeGlobalData()
    .subscribe({
      next: (result)=>{
        console.log(result);

        this.collegeData = result;
        result.forEach(col_con=>{

          if(!Number.isNaN(col_con.confirmed)){
            this.totalColConfirmed += col_con.confirmed;
          }
          if(col_con.college === "George Mason University"){
            console.log('confirmed'+col_con.confirmed);
            this.mason = col_con.confirmed;
          }
          if(col_con.college === "University of Virginia"){
            console.log('confirmed'+col_con.confirmed);
            this.uva = col_con.confirmed;
          }
          if(col_con.college === "Virginia Commonwealth University"){
            console.log('confirmed'+col_con.confirmed);
            this.vcu = col_con.confirmed;
          }
          if(col_con.college === "James Madison University"){
            console.log('confirmed'+col_con.confirmed);
            this.jmu = col_con.confirmed;
          }
          if(col_con.college === "Virginia Tech"){
            console.log('confirmed'+col_con.confirmed);
            this.vtech = col_con.confirmed;
          }
          if(col_con.college === "University of Mary Washington"){
            console.log('confirmed'+col_con.confirmed);
            this.umw = col_con.confirmed;
          }
          if(col_con.college === "Old Dominion University"){
            console.log('confirmed'+col_con.confirmed);
            this.odu = col_con.confirmed;
          }

        })

      }
    })


  }

  updateStates(college: string) {
    // console.log(this.collegeData)
    // console.log(college)

    this.selectedValue = true;

    this.collegeData.forEach(col_cases=>{

      if(col_cases.college === college) {
        this.totalCollege = col_cases.confirmed;
        this.college = col_cases.college;
        this.state = col_cases.state;
        this.county = col_cases.county;
        this.city = col_cases.city;
        console.log(this.state);
      }

    })
  }

}
