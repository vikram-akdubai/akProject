import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-coronalive',
  templateUrl: './coronalive.component.html',
  styleUrls: ['./coronalive.component.css']
})
export class CoronaliveComponent implements OnInit {

  today: number = Date.now();

  suspectedcase;
  coronalive;
  livecoronadata;
  constructor(private apiService: ApiService) { 

  }
  ngOnInit() {

    this.apiService.livecorona().subscribe((data)=>{
      this.coronalive = data;
  });

  this.apiService.livecoronadata().subscribe((data)=>{
    this.livecoronadata = data;
    console.log(this.livecoronadata);
});

this.apiService.getsuspectedCase().subscribe((data)=>{
  
  this.suspectedcase = data;
  console.log(this.suspectedcase);
});

   
}
}
