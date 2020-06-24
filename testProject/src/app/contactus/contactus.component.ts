import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

public email:any=[];
public number:any=[];
public subject:any=[];
public message:any=[];
public name:any=[];
showMsg: boolean = false;
  onSubmit() { 

      this.apiService.ContactUs(this.email,this.name,this.number,this.subject,this.message).subscribe(
        data => {
          this.showMsg= true;
        });  
  }
  
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
