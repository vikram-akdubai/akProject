import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MustMatch } from '../_helpers/must-match.validator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctorreg',
  templateUrl: './doctorreg.component.html',
  styleUrls: ['./doctorreg.component.css']
})
export class DoctorregComponent implements OnInit {
  country;

  public title:any=[];
  public firstName:any=[];
  public lastName:any=[];
  public email:any=[];
  public mobile:any=[];
  public countrycode:any=[];
  public dob:any=[];
  public password:any=[];
  showModalBox:boolean;
  button_click:boolean;

  

  // component 
onInputEntry(event, nextInput) {
  let input = event.target;
  let length = input.value.length;
  let maxLength = input.attributes.maxlength.value;

  if (length >= maxLength) {
    nextInput.focus();
  }
}

  onSubmit() {

    this.submitted = true; 
    this.showModalBox = true;
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else{
          this.apiService.PostDrReg(this.title,this.firstName,this.lastName,this.email,this.countrycode,this.mobile,this.dob,this.password).subscribe(
            data => {
              //location.reload();   
            this.showModalBox = true; 
        });  
        }
 
    //return false;
  }

  registerForm: FormGroup;
    submitted = false;
 
public otpchar1:any=[];
public otpchar2:any=[];
public otpchar3:any=[];
public otpchar4:any=[];

onSubmitOTP() {
  this.submittedotp = true;
      if (this.otpCheck.invalid) {
          return;
      } else{
        this.apiService.PostOTP(this.otpchar1,this.otpchar2,this.otpchar3,this.otpchar4).subscribe(
          data => {
            //location.reload();
            
         });  
      } 
}


otpCheck: FormGroup;
submittedotp = false;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, datePipe: DatePipe) { 
    this.button_click=true;
  }

  ngOnInit() {

    this.apiService.countryApi().subscribe((data)=>{
      console.log(data);
      this.country = data['response'];
    });

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      countrycode: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  this.otpCheck = this.formBuilder.group({
    otpchar1: ['', [Validators.required, Validators.minLength(1)]],
    otpchar2: ['', [Validators.required, Validators.minLength(1)]],
    otpchar3: ['', [Validators.required, Validators.minLength(1)]],
    otpchar4: ['', [Validators.required, Validators.minLength(1)]],
});

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get o() { return this.otpCheck.controls; }

 
  


}
