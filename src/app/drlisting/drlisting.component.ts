import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-drlisting',
  templateUrl: './drlisting.component.html',
  styleUrls: ['./drlisting.component.css']
})
export class DrlistingComponent implements OnInit {
  homeSpeciality;
  country;

  viewProfile:boolean=false;
  Schedule:boolean=false;
  aboutviewProfile:boolean=true;

  aboutviewProfileFunction(){
    this.aboutviewProfile=true;
  }

  viewProfileFunction(){
      this.viewProfile=true;
      this.Schedule=false;
  }

  ScheduleFunction(){
      this.Schedule=true;
      this.viewProfile=false;
  }



  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getSpecilityHome().subscribe((data)=>{
      console.log(data);
      this.homeSpeciality = data['response'];
  });

  this.apiService.countryApi().subscribe((data)=>{
    console.log(data);
    this.country = data['response'];
  }); 

  }

}
