import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import {catchError } from 'rxjs/operators';
import { UtilityService } from './_services';

const httpOptions = { headers: new HttpHeaders({'access_token': 'accessToken-3sf1y44kka1aps8e2520adec296e9dc2e2cd487d1091d72a', 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Expose-Headers':'Access-Control-*', 'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD','Access-Control-Allow-Origin':'*', 'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'}) };


@Injectable({
  providedIn: 'root'
})
export class ApiService {

// Doctor Profile api


public httpOptions;

constructor(private httpClient: HttpClient, http: HttpClient,private utilityService: UtilityService) {
  this.user = this.utilityService.getCurrentUser();
  console.log("checkuser",this.user.access_token)

}
  public user:any=[];

  public getTreatmnentList(){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('speciality_name', "Anesthesiology");
    params = params.append('searchTxt', "");
    params = params.append('searchType', "TREATMENT");
        return this.httpClient.post(`https://artelir.com:3018/common/getsuggestion_treatment`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
  }

  // Home Screen APi

public getSpecilityHome(){
  return this.httpClient.get(`https://artelir.com:3018/specilityData/getSpecilityList`);

}

// End here

  
  public getDoctorAbout(aboutme:any): Observable<any> 
      {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        
        params = params.append('about_me', aboutme);
        params = params.append('user_type', "2");
        params = params.append('user_id', "docId-3sf1y44sk8oeycgj");

        return this.httpClient.post(`https://artelir.com:3018/doctor/add_aboutus_doctor`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
       }

  public getClinicSpeciality(): Observable<any> 
       {
         console.log(httpOptions);  
         let params = new HttpParams(); 
         
         params = params.append('searchTxt', "");
         params = params.append('searchType', "SPECIALITY");
 
         return this.httpClient.post(`https://artelir.com:3018/common/get_sugestion_speciality`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
        }

  public postDoctorEdu(adduserschool:any,adduserdegree:any,addusercollege:any,addusergrade:any,adduserdescrip:any,addselectyear:any,addendtyear:any,adduserfile:any,selectedFile:File): Observable<any> 
      {
        // let params = new HttpParams(); 
        let httpOptions = { headers: new HttpHeaders({'access_token': 'accessToken-3sf1y44kka1aps8e2520adec296e9dc2e2cd487d1091d72a', 'Content-Type': 'multipart/form-data','Access-Control-Expose-Headers':'Access-Control-*', 'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD','Access-Control-Allow-Origin':'*', 'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'}) };
        let params = new FormData();
         params.append('school', adduserschool);
         params.append('user_type', "2");
         params.append('user_id', this.user.user_id);
         params.append('degree', adduserdegree);
         params.append('college_university', addusercollege);
         params.append('grade', addusergrade);
         params.append('description', adduserdescrip);
         params.append('year', addselectyear + '-' + addendtyear);
         params.append('method', 'insert_data');
         params.append('certificate_name', adduserfile);
         params.append('certificate_file', selectedFile);
         params.append('education_id', "");
        return this.httpClient.post(`https://artelir.com:3018/doctor/insert_doctor_education_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
        }

  public getDoctorEduDetails(){

    let httpOptions = { headers: new HttpHeaders({'access_token': 'accessToken-3sf1y44kka1aps8e2520adec296e9dc2e2cd487d1091d72a', 'Content-Type': 'multipart/form-data','Access-Control-Expose-Headers':'Access-Control-*', 'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD','Access-Control-Allow-Origin':'*', 'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'}) };
    let params = new HttpParams(); 
    params = params.append('user_id', this.user.user_id);
    return this.httpClient.get(`https://artelir.com:3018/patient/get_educationQualification_details`, httpOptions);

  }

  public PostOTP(otpchar1:any,otpchar2:any,otpchar3:any,otpchar4:any,): Observable<any> 
  {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        params = params.append('verification_code', otpchar1 + otpchar2 + otpchar3 + otpchar4);
        return this.httpClient.post(`https://artelir.com:3018/patient/signup_otp_verify`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
  }
  public postAddClinicBasic(
                    clinicName:any,
                    addressOne:any,
                    addressTwo:any,
                    clinicCountry:any,
                    clinicState:any,
                    clinicCity:any,
                    clinicPostcode:any,
                    clinicContactno:any,
                    clinicWebsite:any
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('user_type', "2");
    params = params.append('user_id', "docId-3sf1y44sk8oeycgj");
    params = params.append('country', clinicCountry);
    params = params.append('state', clinicState);
    params = params.append('city', clinicCity);
    params = params.append('postal_code', clinicPostcode);
    params = params.append('clinic_name', clinicName);
    params = params.append('clinic_contact', clinicContactno);
    params = params.append('website', clinicWebsite);
    params = params.append('clinic_address_line_1', addressOne);
    params = params.append('clinic_address_line_2', addressTwo);
    params = params.append('method', 'insert_data');
    return this.httpClient.post(`https://artelir.com:3018/doctor/clinic_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
  }
  public postAddDocprof(
    usergender:any,
    userwebsite:any,
    usercliniclist:any,
    selectedItems:any,
    userspecialty:any,
    aboutme:any
  ): Observable<any> {
        let params = new HttpParams(); 
        params = params.append('user_type', "2");
        params = params.append('user_id', "docId-3sf1y44sk8oeycgj");
        params = params.append('gender', usergender);
        params = params.append('select_language', selectedItems);
        params = params.append('practicing_in', usercliniclist);
        params = params.append('website', userwebsite);
        params = params.append('speciality', userspecialty);
        params = params.append('aboutme', aboutme);
        params = params.append('method', 'insert_data');
        return this.httpClient.post(`https://artelir.com:3018/doctor/professional_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
  }
  public postDoctorprof(
                        usertitle:any,
                        userfirstName:any,
                        userlastName:any,
                        usergender:any,
                        useremail:any,
                        userdob:any,
                        userccode:any,
                        usermobile: any,
                        userspecialty:any,
                        customelang:any,
                        usercliniclist:any,
                        userwebsite:any,
                        aboutme:any): Observable<any> 
      {
         
        let params = new HttpParams(); 
        this.user = this.utilityService.getCurrentUser();
        params = params.append('title', usertitle);
        params = params.append('user_type', "2");

        params = params.append('user_id', this.user.user_id);
        params = params.append('first_name', userfirstName);
        params = params.append('last_name', userlastName);
        params = params.append('gender', usergender);
        params = params.append('email_id', useremail);
        params = params.append('date_of_birth', userdob);
        params = params.append('country_code', userccode);
        params = params.append('mobile_number', usermobile);
        params = params.append('speciality', userspecialty);
        params = params.append('select_language', customelang);
        params = params.append('practicing_in', usercliniclist);
        params = params.append('website', userwebsite);
        params = params.append('about_me', aboutme);
        params = params.append('reg_year', "2020");
        params = params.append('method', 'update_data');
        return this.httpClient.post(`https://artelir.com:3018/doctor/professional_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
        }

  public getDoctorProfile(user_id:any){  
  let httpOptions = { headers: new HttpHeaders({'access_token': this.user.access_token, 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Expose-Headers':'Access-Control-*', 'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD','Access-Control-Allow-Origin':'*', 'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'}) };

          let params = new HttpParams(); 
          params = params.append('user_id', this.user.user_id);
          params =  params = params.append('method', "get_image_data");
              return this.httpClient.post(`https://artelir.com:3018/doctor/professional_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
        }

        

  public getDoctorEdu(user_id:any){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('user_id', user_id);
        return this.httpClient.post(`https://artelir.com:3018/patient/get_educationQualification_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
  }
// End here

// coutry state city API's here
public countryClinicApi(){
  return this.httpClient.get(`https://artelir.com:3018/user/get_country`);

}

// coutry state city API's here
  public countryApi(){
    return this.httpClient.get(`https://artelir.com:3018/user/get_country`);
  }

  public getState(){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('country_id', "2");
        return this.httpClient.post(`https://artelir.com:3018/user/get_state`, params, httpOptions).map((res: HttpResponse<JSON>) => res); 
  }

  public getCity(){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('state_id', "74");
        return this.httpClient.post(`https://artelir.com:3018/user/get_city`, params, httpOptions).map((res: HttpResponse<JSON>) => res); 
  }

  // end's herer

  // subscribe email -
  public emailSubscribeService(email:any){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('email', email);
        return this.httpClient.post(`https://artelir.com:3018/patient/insert_subscription`, params, httpOptions).map((res: HttpResponse<JSON>) => res); 
  }

  //End here

  public getSpeciality(){
    console.log(this.httpOptions);  
    let params = new HttpParams(); 
    params = params.append('searchTxt', "");
    params = params.append('searchType', "SPECIALITY");
        return this.httpClient.post(`https://artelir.com:3018/common/get_sugestion_speciality`, params, httpOptions).map((res: HttpResponse<JSON>) => res); 
  }

  
  public launguageApi(){
    return this.httpClient.get(`https://artelir.com:3018/doctor/get_languages`);
  }

  public DrregAbout(about_me:any): Observable<any> 
  {
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('about_me', about_me);

    return this.httpClient.post(`https://artelir.com:3018/patient/adduser_profile`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
   }

  
  public getNews(block_type:any){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('block_type', block_type);
        return this.httpClient.post(`https://artelir.com:3018/website/getComments`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
  }


  public livecorona(){
    return this.httpClient.get(`https://coronavirus-19-api.herokuapp.com/all`);
  }


  public livecoronadata(){
    return this.httpClient.get(`https://coronavirus-19-api.herokuapp.com/countries`);
  }
  

  public PostNews(name:any,email:any,comment:any,block_type:any): Observable<any> 
      {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        params = params.append('name', name);
        params = params.append('email', email);
        params = params.append('comment', comment);
        params = params.append('block_type', block_type);

        return this.httpClient.post(`https://artelir.com:3018/website/postComments`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
       }

  // doctor registration POST api

  public PostDrReg(title:any,firstName:any,lastName:any,email:any,countrycode:any,mobile:any,dob:any,password:any): Observable<any> 
      {
        console.log(httpOptions);  
        let user="2";
        let divice="3";
        let token="2";
        let ltiud="";
        let longtud="";
        let date=dob;
        let dobjson=JSON.stringify(date.year + '-' + date.month + '-' + date.day);
        let params = new HttpParams(); 
        params = params.append('title', title);
        params = params.append('first_name', firstName);
        params = params.append('last_name', lastName);
        params = params.append('email_id', email);
        params = params.append('country_code', countrycode);
        params = params.append('mobile_number', mobile);
        params = params.append('date_of_birth', dobjson);
        params = params.append('dob_yy', date.year);
        params = params.append('password', password);
        params = params.append('user_type',user);
        params = params.append('device_type',divice);
        params = params.append('device_token',token);
        params = params.append('latitude',ltiud);
        params = params.append('longitude',longtud);


        return this.httpClient.post(`https://artelir.com:3018/patient/registration_web`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
       }

  //End here

  // contact US API

  public ContactUs(email:any,name:any,number:any,subject:any,message:any,){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('email_id', email);
    params = params.append('mobile_number', number);
    params = params.append('subject', subject);
    params = params.append('name', name);
    params = params.append('message', message);
        return this.httpClient.post(`https://artelir.com:3018/common/contact_us_web`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
  }

  // End here



        getsuspectedCase() {
          return this.httpClient.get("https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases/suspected", {
            headers: new HttpHeaders().set(
              "Authorization",
              "Bearer 8bbc49b2-2f84-34dc-b201-cc673dd26f3a"
            )
          });
        }
}
