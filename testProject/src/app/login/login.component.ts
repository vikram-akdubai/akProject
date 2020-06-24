import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../_services';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  email:string;
  password:string;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.minLength(4)]],
        password: [null, [Validators.required]]
      });
      this.authenticationService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Dashboards/Dashboard';
    }
    login(){
    console.log(this.loginForm);
    console.log('dsfgdsgdsg');
   // this.router.navigate(['/Dashboards/Dashboard']);
  }
  onSubmit() {
    var data = {
      "email_id":this.loginForm.value.email,
      "password":this.loginForm.value.password,
      "device_type" : "1",
      "user_type"    : "2"
    }
    this.spinner.show();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/docprofile';
    this.authenticationService.login(data).then((success)=>{
      this.toastr.success('Login Successfully' , 'Success');
      this.spinner.hide();
      this.router.navigate([this.returnUrl]);
    }, (error)=>{
      console.log(JSON.stringify(error))
    });
  }
}
