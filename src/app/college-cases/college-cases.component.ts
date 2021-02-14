import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-cases',
  templateUrl: './college-cases.component.html',
  styleUrls: ['./college-cases.component.css']
})
export class CollegeCasesComponent implements OnInit {

  @Input('totalCollege')
  totalCollege;
  @Input('college')
  college;
  @Input('state')
  state;
  @Input('city')
  city;
  @Input('county')
  county

  constructor() { }

  ngOnInit(): void {
  }

}
