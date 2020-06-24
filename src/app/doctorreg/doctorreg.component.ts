import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MustMatch } from '../_helpers/must-match.validator';
import { DatePipe } from '@angular/common';
import { UtilityService } from '../_services';
import { NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-doctorreg',
  templateUrl: './doctorreg.component.html',
  styleUrls: ['./doctorreg.component.css']
})
export class DoctorregComponent implements OnInit {
  @ViewChild('someModal') someModal:ElementRef;

  country;

  public title:any=[];
  public firstName:any=[];
  public lastName:any=[];
  public email:any=[];
  public mobile:any=[];
  public countrycode:any=[];
  public dob:Date;
  public password:any=[];
  showModalBox:boolean;
  button_click:boolean;
  verification_code: any;
  errBlock: boolean;
  errorText: any;

  

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
              console.log(data.message);
              this.triggerFalseClick();
              localStorage.setItem('currentUser',data.response );
              this.verification_code = data.response.verification_code;
              
              console.log(data);
              this.utilityService.setCurrentUser(data.response);
              this.apiService.setUser();
              
              this.showModalBox = true; 

              //this.submitted = true;
              //$(this.someModal.nativeElement).modal('show'); 
        }
        , error=>{
          this.errBlock =true;
          this.errorText = error.message;
          console.log("what is error" + this.errorText);
        }
        );  
        }
 
    //return false;
  }

  emailOTP() {

    this.submitted = true; 
    this.showModalBox = true;
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else{
          this.apiService.emailOTP(this.firstName,this.email).subscribe(
            data => { 
              localStorage.setItem('currentUser',data.response );
              this.verification_code = data.response.verification_code;
              
              console.log(data);
              this.utilityService.setCurrentUser(data.response);
              this.apiService.setUser();
        });  
        }
 
    //return false;
  }

  resendOTP(){
    this.submitted = true; 
    this.showModalBox = true;
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else{
          this.apiService.resendOTP(this.firstName,this.countrycode,this.mobile).subscribe(
            data => { 
              localStorage.setItem('currentUser',data.response );
              this.verification_code = data.response.verification_code;
              
              console.log(data);
              this.utilityService.setCurrentUser(data.response);
              this.apiService.setUser();
        });  
        }
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
           if(data.response == 'OTP matched successfully.'){
            this.triggerFalseotpClick();            
            setTimeout( function(){ 
               this.router.navigateByUrl('/docprofile');
            }  , 1000 );
           }else{
            alert('otp is wrong')
           }
         
            
            //location.reload();
        
         },
         error =>{
          alert('otp is wrong');         
         }
         );  
      } 
}


otpCheck: FormGroup;
submittedotp = false;

  constructor(private apiService: ApiService, private config: NgbDatepickerConfig, private breakpointObserver: BreakpointObserver, private router : Router, private formBuilder: FormBuilder, datePipe: DatePipe,  private utilityService: UtilityService) { 
    this.button_click=true;
    const current = new Date();
    config.minDate = { year: 1950, month: 12, day: 31 };
  }
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  @ViewChild('otp') otp: ElementRef<HTMLElement>;
  triggerFalseClick() {
      let el: HTMLElement = this.myDiv.nativeElement;
      el.click();
  }
  triggerFalseotpClick() {
    let el: HTMLElement = this.otp.nativeElement;
    el.click();
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
      password: ['', [Validators.required, Validators.minLength(8)]],
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
