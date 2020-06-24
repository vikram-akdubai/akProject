import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-healthblog',
  templateUrl: './healthblog.component.html',
  styleUrls: ['./healthblog.component.css']
})
export class HealthblogComponent implements OnInit {

  articles;
  public name:any=[];
  public email:any=[];
  public comment:any=[];
  public output:any=[];
  public block_type:any=[];

  button_click:boolean;
  public postcomment()
  {
    this.getresponse();
  }
  async getresponse() {
    this.button_click=false;
    var self=this;
        self.apiService.PostNews(this.name,this.email,this.comment,"6").subscribe(
        data => {
          this.button_click=true; 
          location.reload();    
    });     
    }
  constructor(private apiService: ApiService) { 
    this.button_click=true;
  }
  ngOnInit() {
    this.apiService.getNews("6").subscribe((data)=>{
      console.log(data);
      this.articles = data['response'];
  });
}
}
