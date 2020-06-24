import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homecontainer',
  templateUrl: './homecontainer.component.html',
  styleUrls: ['./homecontainer.component.css']
})
export class HomecontainerComponent implements OnInit {
  homeSpeciality;
  country;

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
