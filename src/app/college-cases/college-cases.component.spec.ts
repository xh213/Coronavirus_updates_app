import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCasesComponent } from './college-cases.component';

describe('CollegeCasesComponent', () => {
  let component: CollegeCasesComponent;
  let fixture: ComponentFixture<CollegeCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
