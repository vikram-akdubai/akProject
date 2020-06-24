import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public email:any=[];
  button_click:boolean;
  onSubmitsubscribe(){
    console.log("testing" + this.email);
    this.button_click=false;
          this.apiService.emailSubscribeService(this.email).subscribe(
            data => {  
              this.button_click=true; 
        }); 
       //location.reload();   
  }
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
