import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import {catchError } from 'rxjs/operators';
const httpOptions = { headers: new HttpHeaders({'access_token': 'accessToken-3sf1y8zsk92x08l732b7bbd3b7e9dd25a7e9b75909d65cac', 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Expose-Headers':'Access-Control-*', 'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD','Access-Control-Allow-Origin':'*', 'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'}) };



@Injectable({
  providedIn: 'root'
})
export class ApiService {

// Doctor Profile api


  public getTreatmnentList(){
    console.log(httpOptions);  
    let params = new HttpParams(); 
    params = params.append('speciality_name', "Anesthesiology");
    params = params.append('searchTxt', "");
    params = params.append('searchType', "TREATMENT");
        return this.httpClient.post(`https://artelir.com:3018/common/getsuggestion_treatment`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
  }

  
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

  public postDoctorEdu(userschool:any,userdegree:any,usercollege:any,usergrade:any,userdescrip:any,selectyear:any,endtyear:any,): Observable<any> 
      {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        params = params.append('school', userschool);
        params = params.append('user_type', "2");
        params = params.append('user_id', "docId-3sf1y44sk8oeycgj");
        params = params.append('degree', userdegree);
        params = params.append('college_university', usercollege);
        params = params.append('grade', usergrade);
        params = params.append('description', userdescrip);
        params = params.append('year', selectyear + '-' + endtyear);

        return this.httpClient.post(`https://artelir.com:3018/patient/addeducation_qualification_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);
        }

  public PostOTP(otpchar1:any,otpchar2:any,otpchar3:any,otpchar4:any,): Observable<any> 
      {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        params = params.append('verification_code', otpchar1 + otpchar2 + otpchar3 + otpchar4);

        return this.httpClient.post(`https://artelir.com:3018/patient/signup_otp_verify`, params, httpOptions).map((res: HttpResponse<JSON>) => res);

        }

  public postDoctorprof(usertitle:any,userfirstName:any,userlastName:any,usergender:any,userlanguages:any,userwebsite:any,usercountry:any,usercliniclist:any,): Observable<any> 
      {
        console.log(httpOptions);  
        let params = new HttpParams(); 
        params = params.append('title', usertitle);
        params = params.append('user_type', "2");
        params = params.append('user_id', "docId-3sf1y44sk8oeycgj");
        params = params.append('first_name', userfirstName);
        params = params.append('last_name', userlastName);
        params = params.append('gender', usergender);
        params = params.append('select_language', userlanguages);
        params = params.append('website', userwebsite);
        params = params.append('country', usercountry);
        params = params.append('speciality', usercliniclist);

        return this.httpClient.post(`https://artelir.com:3018/patient/adduser_profile`, params, httpOptions).map((res: HttpResponse<JSON>) => res);

        }

  public getDoctorProfile(user_id:any){
          console.log(httpOptions);  
          let params = new HttpParams(); 
          params = params.append('user_id', user_id);
              return this.httpClient.post(`https://artelir.com:3018/doctor/get_proffessional_details`, params, httpOptions).map((res: HttpResponse<JSON>) => res);  
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

       constructor(private httpClient: HttpClient, http: HttpClient) {

        }

        getsuspectedCase() {
          return this.httpClient.get("https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases/suspected", {
            headers: new HttpHeaders().set(
              "Authorization",
              "Bearer 8bbc49b2-2f84-34dc-b201-cc673dd26f3a"
            )
          });
        }
}
