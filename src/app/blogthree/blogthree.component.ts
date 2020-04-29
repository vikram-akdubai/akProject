import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blogthree',
  templateUrl: './blogthree.component.html',
  styleUrls: ['./blogthree.component.css']
})
export class BlogthreeComponent implements OnInit {

  articlesthree;
  public name:any=[];
  public email:any=[];
  public comment:any=[];
  public output:any=[];
  public block_type:any=[];

  button_click:boolean;
  public postcommentthree()
  {
    this.getresponse();
  }
  async getresponse() {
    this.button_click=false;
    var self=this;
        self.apiService.PostNews(this.name,this.email,this.comment,"3").subscribe(
        data => {
          this.button_click=true; 
          location.reload();    
    });     
    }
  constructor(private apiService: ApiService) { 
    this.button_click=true;
  }
  ngOnInit() {
    this.apiService.getNews("3").subscribe((data)=>{
      console.log(data);
      this.articlesthree = data['response'];
  });
}

}
