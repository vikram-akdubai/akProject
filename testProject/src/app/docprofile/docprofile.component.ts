import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ApiService } from '../api.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from '../_helpers/must-match.validator';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilityService } from '../_services';

@Component({
  selector: 'app-docprofile',
  templateUrl: './docprofile.component.html',
  styleUrls: ['./docprofile.component.css']
})
export class DocprofileComponent implements OnInit {

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  
  calshowDiv = {
    previous : false,
    current : false,
    next : false,
    myCal: false,
    clinic: false,
    wallet: false
  }

  walletabshowDiv = {
    previous : false,
    current : false,
    next : false
  }

  walletshowDiv = {
    previous : false,
    current : false,
    next : false
  }

  videoshowDiv = {
    previous : false,
    current : false,
    next : false
  }

  showDiv = {
    previous : false,
    current : false,
    next : false
  }

  launguage;
  country;
  state;
  drprofile;
  drprofileedu;
  speciality;
  optionsSelect: Array<any>;
  countryClinic;
  city;
  customelang;
  homeSpeciality;
  getDataDetails;
  
public selectSpecalty:any=[];
public usersdata:any=[];
public aboutme:any=[];
public adduserschool:any=[];
public adduserdegree:any=[];
public addusercollege:any=[];
public addusergrade:any=[];
public adduserdescrip:any=[];
public addselectyear:any=[];
public addendtyear:any=[];
public adduserfile:any=[];

public editschoolname:any=[];

public usertitle:any=[];
public userfirstName:any=[];
public userlastName:any=[];
public usergender:any=[];
public countrycode:any=[];
public userlanguages:any=[];
public userwebsite:any=[];
public userMobile:any=[];
public usercountry:any=[];
public userspecialty:any=[];
public :any=[];
public usercliniclist:any=[];


public country_id:any=[];

public regisnumber:any=[];
public countryiduser:any=[];
public regisyear:any=[];
public userstate:any=[];
public certiexpyear:any=[];
public usercity:any=[];
public uplaodcerti:any=[];
public afternoonworkinghoursFrom:any=[];
public afternoonworkinghoursTo:any=[];
public morningworkinghoursTo:any=[];
public morningworkinghoursFrom:any=[];
public eveningworkinghoursFrom:any=[];
public eveningworkinghoursTo:any=[];
name = 'Angular 4';
  enableTxtBoxTwo = true;
  enableTxtBoxThree = true;
  enableTxtBoxFour = true;
  enableTxtBoxFive = true;
  enableTxtBoxSix = true;
  enableTxtBoxSeven = true;
  enableTxtBoxEight = true;

  urls = [];
  public clinicName: any=[];
  public addressOne: any=[];
  public clinicCountry: any=[];
  public clinicState: any=[];
  public clinicCity: any=[];
  public clinicPostcode: any=[];
  public clinicContactno: any=[];
  public clinicWebsite: any=[];
  public addressTwo: any=[];
  public custometreatment: string;
  useremail: any;
  userccode: any;
  userdob: any;
  usermobile: any;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
  

  onSubmitAdd() {
    console.log("checkk",this.usertitle)
      this.submitted = true;
      console.log("selecteditems",this.selectedItems)
     //   let dateformatchange = this.onDateSelect(this.regisyear);
     //    console.log("dateformat changed",dateformatchange)
        this.apiService
            .postDoctorprof(
                  this.usertitle,
                  this.userfirstName,
                  this.userlastName,
                  this.usergender,
                  this.useremail,
                  this.userdob,
                  this.userccode,
                  this.usermobile,
                  this.userspecialty,
                  this.customelang,
                  this.usercliniclist,
                  this.userwebsite,
                  this.aboutme,
                  ).subscribe(
          data => { 
            location.reload(); 
      }); 
      
}
onSubmitThree(){
  this.submitted_prod_add = true;
  console.log("selecteditems",this.selectedItems)
  if (this.userAddFormProfile.invalid) {
    console.log("all in work failed")
      return;
      console.log("success");
  } else{
    this.apiService
        .postAddDocprof(
              this.usergender,
              this.userwebsite,
              this.usercliniclist,
              this.customelang,
              this.userspecialty,
              this.aboutme
              ).subscribe(
      data => { 
        console.log("success");
  }); 
    //location.reload();   
  } 
}
userFormProfile: FormGroup;
userAddFormProfile:FormGroup;
submitted = false;
submitted_prod_add = false;

onSubmitTwo() {

  

  this.submitted3 = true;
   
      if (this.registrationDetails.invalid) {
          return;
          console.log("success");
      }

}
registrationDetails: FormGroup;
submitted3 = false;

selectedFile: File = null;
onFileSelected(event){
  this.selectedFile = <File>event.target;
  console.log(event)
}

onSubmitAddEducation(){
  this.submitted2 = true;
      if (this.educationAddFormProfile.invalid) {
          return;
      } else{
        this.apiService.postDoctorEdu(this.adduserschool,this.adduserdegree,this.addusercollege,this.addusergrade,this.adduserdescrip,this.addselectyear.year,this.addendtyear.year,this.adduserfile, this.selectedFile).subscribe(
          data => {  
      }); 
     //location.reload();   
      } 
}
  
educationAddFormProfile: FormGroup;
submitted2 = false;

//date picker
model: NgbDateStruct;
//end here


  public addresses: any[] = [{
    title: '',
    fname: '',
    lname: '',
    gender: '',
    lang: '',
    country: '',
    website: '',
    speciality: ''
  }];

  // my edication details

  public eduction: any[] = [{
    userschool: '',
    userdegree: '',
    usercollege: '',
    usergrade: '',
    selectyear: '',
    endtyear: '',
    userdescrip: '',
    userfile: ''
  }];
  //end
  // my registration details
  public registration: any[] = [{
    title: '',
    fname: '',
    lname: '',
    gender: '',
    lang: '',
    country: '',
    website: '',
    speciality: ''
  }];
  //end
  private stepper: Stepper;
  public about_me:any=[];

  button_click:boolean;
  public DrregAbout()
  {
    console.log("tested");
  }

  next() {
    this.stepper.next();
  }

  itemList = [];
  selectedItems = [];
  settings = {};
  settingsForspeciality = {};

  itemListNew = [];
  selectedItemsNew = [];
  settingsNew = {};

  treatmentClinic = [];
  selectedTreatment = [];
  settingsTreatment = {};

 

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, public fb: FormBuilder, private cd: ChangeDetectorRef,private utilityService: UtilityService) { 
    this.button_click=true;
  }

  registrationForm = this.fb.group({
    file: [null]
  })  

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  submitted1

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }

  // Submit Registration Form
  onSubmit1() {
    this.submitted1 = true;
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }

  onSubmitClinic() {

    this.submittedClinic = true;
        // stop the process here if form is invalid
        
        if (this.clinicForm.invalid) {
          console.log("all in work failed")
            return;
            console.log("success");
        } else{
          console.log("address2",this.addressTwo)
          this.apiService
              .postAddClinicBasic(
                    this.clinicName,
                    this.addressOne,
                    this.addressTwo,
                    this.clinicCountry,
                    this.clinicState,
                    this.clinicCity,
                    this.clinicPostcode,
                    this.clinicContactno,
                    this.clinicWebsite
              ).subscribe(
            data => { 
              console.log("success");
        }); 
          //location.reload();   
        } 
   
  }
  clinicForm: FormGroup;
  submittedClinic = false;


  ngOnInit() {
    this.usersdata = this.utilityService.getCurrentUser();
    console.log("userdatass",this.usersdata)
    this.itemListNew = [
      { "id": 1, "itemName": "Air Ambulance Transfers" },
      { "id": 2, "itemName": "Money Transfer & Currency Exchange" },
      { "id": 3, "itemName": "Neonatal intensive care unit" },
      { "id": 4, "itemName": "Online Consultancy" },
      { "id": 5, "itemName": "OPD" },
      { "id": 6, "itemName": "Operation Theatre" },
      { "id": 5, "itemName": "Paediatric intensive care unit" },
      { "id": 6, "itemName": "Pharmacy" },
      { "id": 5, "itemName": "Physiotherapy" },
      { "id": 6, "itemName": "Radiology facility" },
      { "id": 5, "itemName": "Telecommunication Services" },
      { "id": 6, "itemName": "Valet Parking" },
      { "id": 5, "itemName": "X-ray facility" },
      { "id": 6, "itemName": "Medical Insurance" },
      { "id": 5, "itemName": "Laundry Services" },
      { "id": 6, "itemName": "Laboratory Service" },
      { "id": 5, "itemName": "Ambulance Service" },
      { "id": 6, "itemName": "Bank & ATM" },
      { "id": 5, "itemName": "Breast Feeding Room" },
      { "id": 6, "itemName": "Coffee Shop" },
      { "id": 5, "itemName": "ECG Services" },
      { "id": 6, "itemName": "Emergency department" },
      { "id": 5, "itemName": "Female Waiting Area" },
      { "id": 6, "itemName": "Intensive care unit" },
      { "id": 5, "itemName": "Intercontinental Food" },
      { "id": 6, "itemName": "Internet" },
      { "id": 5, "itemName": "Interpretation Services" },
      { "id": 6, "itemName": "Kids Play area" },
      { "id": 5, "itemName": "Others" }
  ];
  
    this.settingsNew = {
      text: "Select Clinic Facilities",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      allowSeachFilter: true
  };
  this.settingsForspeciality = {
      text: "Select Speciality",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      allowSeachFilter: true
  };

  
  this.settingsTreatment = {
    text: "Select Clinic Treatment",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class",
    allowSeachFilter: true
  };

    this.itemList = [
      { "id": 1, "itemName": "English" },
      { "id": 2, "itemName": "Arabic" },
      { "id": 3, "itemName": "Chinese (Mandarin)" },
      { "id": 4, "itemName": "French" },
      { "id": 5, "itemName": "German" },
      { "id": 6, "itemName": "Hindi" },
      { "id": 7, "itemName": "Italian" },
      { "id": 8, "itemName": "Japanese" },
      { "id": 9, "itemName": "Korean" },
      { "id": 10, "itemName": "Portuguese" },
      { "id": 12, "itemName": "Russian" },
      { "id": 13, "itemName": "Spanish" },
      { "id": 14, "itemName": "Tagalog" },
      { "id": 15, "itemName": "Thai" },
      { "id": 16, "itemName": "Urdu" },
      { "id": 17, "itemName": "Others" }
  ];

  this.settings = {
    text: "Select Launguge",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class",
    allowSeachFilter: true,
   
};


    this.userFormProfile = this.formBuilder.group({
      usertitle: ['', Validators.required],
      userfirstName: ['', Validators.required],
      userlastName: ['', Validators.required],
      usergender: ['', Validators.required],
      usercountry: ['', Validators.required],
      userwebsite: ['', Validators.required],
      usercliniclist: ['', Validators.required],
      aboutme: ['', Validators.required],
      userMobile: ['', Validators.required],
      selectedItems: ['', Validators.required],
      countrycode: ['', Validators.required],
      userspecialty: ['', Validators.required],
      regisyear: ['', Validators.required]
  });
    this.userAddFormProfile = this.formBuilder.group({
      usertitle: ['', Validators.required],
      userfirstName: ['', Validators.required],
      userlastName: ['', Validators.required],
      usergender: ['', Validators.required],
      useremail: ['', Validators.required],
      userdob: ['', Validators.required],
      userccode: ['', Validators.required],
      usermobile: ['', Validators.required],
      userspecialty: ['', Validators.required],
      customelang: ['', Validators.required],
      usercliniclist: ['', Validators.required],
      userwebsite: ['', Validators.required],
      aboutme: ['', Validators.required],
  });

  this.registrationDetails = this.formBuilder.group({
    regisnumber: ['', Validators.required],
    countryiduser: ['', Validators.required],
    regisyear: ['', Validators.required],
    userstate: ['', Validators.required],
    certiexpyear: ['', Validators.required],
    usercity: ['', Validators.required],
    uplaodcerti: ['', Validators.required]
});
  

  this.educationAddFormProfile = this.formBuilder.group({
    adduserschool: ['', Validators.required],
    adduserdegree: ['', Validators.required],
    addusercollege: ['', Validators.required],
    addusergrade: ['', Validators.required],
    adduserdescrip: ['', Validators.required],
    adduserfile: ['', Validators.required],
    addselectyear: ['', Validators.required],
    addendtyear: ['', Validators.required]
});

    this.apiService.getDoctorProfile(this.usersdata.user_id).subscribe((data)=>{
      this.drprofile = data['response'].professional_details;
      this.usertitle = this.drprofile[0].title;
      this.userfirstName = this.drprofile[0].first_name;
      this.userlastName = this.drprofile[0].last_name;
      this.useremail = this.drprofile[0].email_id;
      this.userdob = this.drprofile[0].date_of_birth;
      this.userccode = this.drprofile[0].country_code;
      this.usermobile = this.drprofile[0].mobile_number;
      console.log("checkprofile",this.drprofile)
  });

  this.apiService.getSpecilityHome().subscribe((data)=>{
    console.log(data);
    this.homeSpeciality = data['response'];
})

this.apiService.getDoctorEduDetails().subscribe((data)=>{
  console.log(data);
  this.getDataDetails = data['response'];
  //for(var i=0; i < this.getDataDetails.length; i++){
  //this.editschoolname = this.getDataDetails[i].school;
 // console.log("looping" + this.getDataDetails[i].school);
 // }
})

  this.apiService.getSpeciality().subscribe((data)=>{
      console.log(data);
      this.selectSpecalty = data['response'];
  });

    this.apiService.launguageApi().subscribe((data)=>{
      console.log(data);
      this.launguage = data['response'];
    });

    this.apiService.getClinicSpeciality().subscribe((data)=>{
      console.log("spl",data)
      this.speciality = data['response'];
    });

    this.apiService.countryApi().subscribe((data)=>{
      console.log(data);
      this.country = data['response'];
    });

    this.apiService.countryClinicApi().subscribe((data)=>{
      console.log(data);
      this.countryClinic = data['response'];
    });

    this.apiService.getState().subscribe((data)=>{
      console.log(this.state);
      this.state = data['response'];
      console.log("hello" + this.state);
    });

    this.apiService.getCity().subscribe((data)=>{
      console.log(data);
      this.city = data['response'];
    });

    this.apiService.getTreatmnentList().subscribe((data)=>{
      console.log(data);
      this.treatmentClinic = data['response'];
    });
    this.clinicForm = this.formBuilder.group({
      clinicName: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo : [''],
      clinicPostcode : [''], 
      clinicContactno: [''],
      clinicWebsite: [''],
      clinicCountry: ['', Validators.required],
      clinicState: ['', Validators.required],
      clinicCity: ['', Validators.required],
    });
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

onItemTreatmentSelect(item: any) {
    let concat = '';
    this.selectedTreatment.forEach((val : any, key: any) => {
      if (typeof val.itemName != undefined)
          concat += val.itemName + ",";
    });
    this.custometreatment = concat; 
    console.log(this.custometreatment)
}
OnItemTreatmentDeSelect(item: any) {
  let concat = '';
  this.selectedTreatment.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.custometreatment = concat; 
}
onSelectTreatmentAll(items: any) {
  let concat = '';
  this.selectedTreatment.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.custometreatment = concat; 
}
onDeSelectTreatmentAll(items: any) {
  let concat = '';
  this.selectedTreatment.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.custometreatment = concat; 
}

onItemSelect(item: any) {
    let concat = '';
    this.selectedItems.forEach((val : any, key: any) => {
      if (typeof val.itemName != undefined)
          concat += val.itemName + ",";
    });
    this.customelang = concat; 
    console.log(this.customelang)
}
OnItemDeSelect(item: any) {
  let concat = '';
  this.selectedItems.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.customelang = concat; 
}
onSelectAll(items: any) {
  let concat = '';
  this.selectedItems.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.customelang = concat; 
}
onDeSelectAll(items: any) {
  let concat = '';
  this.selectedItems.forEach((val : any, key: any) => {
    if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
  });
  this.customelang = concat; 
}
onChangeCountry(items: any){
  console.log("itwmss",items)
  this.countrycode =  '+' + items.target.value; 
}
onDateSelect(items: any){
  let date = '';
  date = items.year + '-';
  items.month < 10 ? date  += '0' + items.month + '-' : date += items.month + '-' ;
  items.day   < 10 ? date  += '0' + items.day   : date += items.day;
  return date;
}

  // convenience getter for easy access to form fields
  get p() { return this.userFormProfile.controls; }
  get pa() { return this.userAddFormProfile.controls; }
  get h() { return this.educationAddFormProfile.controls; }
  get n() { return this.registrationDetails.controls; }
  get f() { return this.clinicForm.controls; }

  addAddress() {
    this.addresses.push({
    title: '',
    fname: '',
    lname: '',
    gender: '',
    lang: '',
    country: '',
    website: '',
    speciality: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }

//my edication details

addedication() {
  this.eduction.push({
  title: '',
  fname: '',
  lname: '',
  gender: '',
  lang: '',
  country: '',
  website: '',
  speciality: ''
  });
}

removeEducation(i: number) {
  this.eduction.splice(i, 1);
}

eductionlogValue() {
  console.log(this.eduction);
}

//my registration details

addregistration() {
  this.registration.push({
  title: '',
  fname: '',
  lname: '',
  gender: '',
  lang: '',
  country: '',
  website: '',
  speciality: ''
  });
}

removeregistration(i: number) {
  this.registration.splice(i, 1);
}

registrationlogValue() {
  console.log(this.registration);
}
}
