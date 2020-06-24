import { Component, OnInit, NgZone, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import Stepper from 'bs-stepper';
import { ApiService } from '../api.service';
import { NgbDateStruct, NgbTimeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from '../_helpers/must-match.validator';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilityService } from '../_services';
import { NgbTimeStringAdapter } from '../_services';
import {NgbModal, NgbModalConfig, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import formdata from 'form-data';
import { formatDate } from '@angular/common';  
import { DOCUMENT } from '@angular/common';
import { CustomAdapter } from '../_services/custome-date-formate.service';
import { DateConfigService } from '../_services/date-config.service';

@Component({
  selector: 'app-docprofile',
  templateUrl: './docprofile.component.html',
  styleUrls: ['./docprofile.component.css'],
  providers: [{ provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter },  { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter }]
  
})
export class DocprofileComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  showguideModalBox:boolean;

  public show:boolean = false;
  public buttonName:any = 'Show';


  meridian = true;
  user_id: any;
  laungList: any;
  useraboutme: any;
  laungname: any;
  getcertDetails: any;
  headClinicname: any;
  headClinicCity: any;
  getEducertDetails: any;
  langlist: any;
  facilitiesList: any;
  userlaunguge: any;
  dateOption: { displayMonths: number; navigation: string; showWeekNumbers: boolean; outsideDays: string; };
  displayMonths: any;
  navigation: any;
  showWeekNumbers: any;
  outsideDays: any;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  calshowDiv = {
    previous: false,
    current: false,
    next: true,
    myCal: false,
    clinic: false,
    wallet: false
  }

  walletabshowDiv = {
    previous: false,
    current: false,
    next: false
  }

  walletshowDiv = {
    previous: false,
    current: false,
    next: false
  }

  videoshowDiv = {
    previous: false,
    current: false,
    next: false
  }

  showDiv = {
    previous: false,
    current: false,
    next: false
  }

  launguage;
  country: any = "";
  state: any = "";
  city: any = "";
  countryArr: any;

  drprofile;
  drprofileedu;
  speciality;
  optionsSelect: Array<any>;
  countryClinic;
  customelang;
  homeSpeciality;
  getDataDetails;
  getClinicList;


  public selectSpecalty: any = [];
  public usersdata: any = [];
  public aboutme: any = [];
  public adduserschool: any = [];
  public adduserdegree: any = [];
  public addusercollege: any = [];
  public addusergrade: any = [];
  public adduserdescrip: any = [];
  public addselectyear: any = [];
  public addendtyear: any = [];
  public adduserfile: any = [];

  public usertitle: any = [];
  public userfirstName: any = [];
  public userlastName: any = [];
  public usergender: any = [];
  public countrycode: any = [];
  public userlanguages: any = [];
  public userwebsite: any = [];
  public userMobile: any = [];
  public usercountry: any = [];
  public userspecialty: any = [];
  public: any = [];
  public usercliniclist: any = [];


  public country_id: any = [];

  public regisnumber: any = [];
  public countryiduser: any = [];
  public regisyear: any = [];
  public userstate: any = [];
  public certiexpyear: any = [];
  public usercity: any = [];
  public regiscouncilnumber: any =[];
  public uplaodcerti: any = [];
  public drregterms: any = [];
  public afternoonworkinghoursFrom: any = [];
  public afternoonworkinghoursTo: any = [];
  public morningworkinghoursTo: any = [];
  public morningworkinghoursFrom: any = [];
  public eveningworkinghoursFrom: any = [];
  public eveningworkinghoursTo: any = [];

  enableTxtBoxTwo = true;
  enableTxtBoxThree = true;
  enableTxtBoxFour = true;
  enableTxtBoxFive = true;
  enableTxtBoxSix = true;
  enableTxtBoxSeven = true;
  enableTxtBoxEight = true;

  name = 'Angular 6';
  marked = false;
  marked1 = false;
  marked2 = false;
  marked3 = false;
  marked4 = false;
  marked5 = false;
  marked6 = false;
  theCheckbox = false;


  urls = [];
  clinicCertiUrl = [];
  public clinicName: any = [];
  public clinicappointduration: any = [];
  
  public clinicCountry: any = [];
  public postal: any = [];
  public cliniccontact: any = [];
  public clinicWebsite: any = [];
  public addressTwo: any = [];
  public custometreatment: string;
  useremail: any;
  userccode: any;
  userdob: any;
  usermobile: any;
  public cliniccountryiduser: any;
  public clinicuserstate: any;

  fileUpload: Array<File> = [];

  onSelectFile(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      this.fileUpload = event.target.files;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {

          this.urls.push(event.target.result);

        }
        console.log(event.target);
        console.log(this.fileUpload);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  certificatefileUpload: Array<File> = [];

  onSelectUploadCertificateFile(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      this.certificatefileUpload = event.target.files;
      var filesAmountCerti = event.target.files.length;
      for (let i = 0; i < filesAmountCerti; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {

          this.clinicCertiUrl.push(event.target.result);

        }
        console.log(event.target);
        console.log(this.certificatefileUpload);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  url;
  open(content,id) {;

    this.apiService.getCertiImageReg(this.usersdata.user_id,id).subscribe((data) => {
      this.getcertDetails = data['response'];
      for(let i = 0; i < this.getcertDetails.length; i++){
        this.url = 'https://artelir.com:3018' + this.getcertDetails[i].image_name;
        this.urls.push(this.url)
        console.log("education images" + this.urls);
      }
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    
       
      }, (reason) => {
  
      });
    });
   
  }

  openEduCerti(content,id) {

    this.apiService.getCertiImageEdu(this.usersdata.user_id,id).subscribe((data) => {
      this.getEducertDetails = data['response'];

      this.urls = [];

     // this.getEducertDetails.image_name.forEach((e,k) => {
      //      var url = 'https://artelir.com:3018'+e.image_name
        //        this.urls.push(url)
        //      });

      for(let i = 0; i < this.getEducertDetails.length; i++){
      this.url = 'https://artelir.com:3018' + this.getEducertDetails[i].image_name;
      this.urls.push(this.url)
      console.log("education images" + this.urls);
    }
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title-education'}).result.then((result) => {

      }, (reason) => {
  
      });
    
    });

   
  }

  toggleStepper = true;
  status = 'Enable';  

  onSubmitAdd() {
    this.submitted = true;
    var userAddForm = this.userAddFormProfile.value;
    console.log("form value" + userAddForm);
    var customelangAll = []
    userAddForm.customelang.forEach(element => {
      customelangAll.push(element.itemName)
    });
    userAddForm.customelang = customelangAll.join();
    this.customelang = customelangAll;
    console.log("bhasaye" + this.customelang );
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
          this.document.location.reload();
        });

  }
  onSubmitThree() {
    this.submitted_prod_add = true;
    console.log("selecteditems", this.selectedItems)
    if (this.userAddFormProfile.invalid) {
      console.log("all in work failed")
      return;
    } else {
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
            this.document.location.reload();
          });
          
    }
  }
  userFormProfile: FormGroup;
  userAddFormProfile: FormGroup;
  submitted = false;
  submitted_prod_add = false;

  //registration form start here

  certificateFile: File = null;
  getregDetails;
  getregDetailsedit;

  onFileCerti(event) {
    this.certificateFile = <File>event.target.files;
  }

  onSubmitTwo() {
    this.submitted3 = true;
    if (this.registrationDetails.invalid) {
      return;
    } else {
      this.apiService.postDoctorReg(this.regisnumber, this.countryiduser, this.regisyear, this.userstate, this.certiexpyear, this.usercity, this.regiscouncilnumber, this.certificateFile).subscribe(
        data => {
          //this.document.location.reload();  
        });
        
    }
  }
  registrationDetails: FormGroup;
  submitted3 = false;

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  @ViewChild('profilepictureimage') pic: ElementRef;
  imageUrl: any = 'https://p7.hiclipart.com/preview/945/372/908/hospital-computer-icons-clinic-health-care-hospital.jpg';
  // profilepiceimage: any = 'https://p7.hiclipart.com/preview/945/372/908/hospital-computer-icons-clinic-health-care-hospital.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  submitted1;
  profilepiceimage:any = './assets/images/profieIcon.png';

  logo: File = null;
  logoPic: File = null;
  getProfilePic(){
    // this.apiService.getProfile(this.logo).subscribe(
    //   data => {
    //    this.logo= 'https://artelir.com:3018' + data;
    //   });
  }
  uploadFilePic(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    this.logoPic = <File>event.target.files[0];
    

    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.profilepiceimage = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
      this.apiService.getProfile(this.logoPic).subscribe(
        data => {
          this.getProfilePic();
        });

    }
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    this.logo = <File>event.target.files[0];
    

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
      }      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
      // this.apiService.getProfile(this.logo).subscribe(
      //   data => {
      //     this.getProfilePic();
      //   });

    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://p7.hiclipart.com/preview/945/372/908/hospital-computer-icons-clinic-health-care-hospital.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }

  registrationForm = this.fb.group({
    file: [null]
  })

  // Submit Registration Form
  onSubmit1() {
    this.submitted1 = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }

  public updateregisnumber: any = [];
  public updatecountryiduser: any = [];
  public updateregisyear: any = [];
  public updateuserstate: any = [];
  public updatecertiexpyear: any = [];
  public updateusercity: any = [];

  updatecertificateFile: File = null;
 // onFileCertiUpdate(event) {
  //  this.updatecertificateFile = <File>event.target.files[0];
 // }

  //onSubmitUpdate() {
   // this.apiService.UpdateDoctorReg(this.updateregisnumber, this.updatecountryiduser, this.updateregisyear, this.updateuserstate, this.updatecertiexpyear, this.updateusercity, this.updatecertificateFile).subscribe(
    //  data => {
     //   this.document.location.reload(); 
    //  });
       
//  }
  editRegistrationDetails: FormGroup;


  //end here

  selectedFile: File = null;
  onFileSelected(event) {
    console.log(event.target.files);
    
    this.selectedFile = <File>event.target.files;
    console.log(event)
  }

  onSubmitAddEducation() {
    this.submitted2 = true;
    if (this.educationAddFormProfile.invalid) {
      return;
    } else {
      this.apiService.postDoctorEdu(this.adduserschool, this.adduserdegree, this.addusercollege, this.addusergrade, this.adduserdescrip, this.addselectyear, this.addendtyear, this.adduserfile, this.selectedFile).subscribe(
        data => {
         //this.document.location.reload();
        });

    }
  }

  edicationDetails;

  public editschoolname: any = [];
  public edituserdegree: any = [];
  public editusercollege: any = [];
  public editusergrade: any = [];
  public editselectyear: any = [];
  public editendtyear: any = [];
  public edituserdescrip: any = [];
  public edituserfile: any = [];

  public editeducation_id: any = [];

  editEduDetails(eduction_id) {
    this.apiService.getEditDetailsEducation(this.usersdata.user_id, eduction_id).subscribe((data) => {
      this.edicationDetails = data['response'];
      this.editschoolname = this.edicationDetails[0].school;
      this.edituserdegree = this.edicationDetails[0].degree;
      this.editusercollege = this.edicationDetails[0].college_university;
      this.editusergrade = this.edicationDetails[0].grade;
      this.edituserdescrip = this.edicationDetails[0].description;
      this.editeducation_id = this.edicationDetails[0].education_id;

      var str = this.edicationDetails[0].year;
      var arr = [];
      arr = str.split('-');

      this.editselectyear = arr[0];
      this.editendtyear = arr[1];
      console.log("end year" + this.editselectyear);

      

    });
  }

  onSubmitEditEducation(editeduction_id) {

    var datestr = this.editselectyear;
    var datearr = [];
    datearr = datestr.split('-');

    var enddatestr = this.editendtyear;
    var enddatearr = [];
    enddatearr = enddatestr.split('-');

    this.editselectyear = datearr[0];
      this.editendtyear = enddatearr[0];

    this.apiService.postDoctorEditEdu(this.editschoolname, this.edituserdegree, this.editusercollege, this.editusergrade, this.edituserdescrip, this.editselectyear, this.editendtyear, this.edituserfile, this.selectedFile, editeduction_id).subscribe(
      data => {
      //this.document.location.reload();
      });

  }


  public editregistration_id: any = [];
  public editregisnumber: any = [];
  public editcountryiduser: any = [];
  public editregisyear: any = [];
  public edituserstate: any = [];
  public editcertiexpyear: any = [];
  public editusercity: any = [];
  updateregistrationDetails;

  editRegistrationButtom(reg_id) {
    this.apiService.getEditDetailsReg(this.usersdata.user_id, reg_id).subscribe((data) => {
      this.updateregistrationDetails = data['response'];
      this.editregisnumber = this.updateregistrationDetails[0].registration_no;
      this.editcountryiduser = this.updateregistrationDetails[0].country_name;
      this.editregisyear = this.updateregistrationDetails[0].registration_year;
      this.edituserstate = this.updateregistrationDetails[0].state_name;
      this.editcertiexpyear = this.updateregistrationDetails[0].expiry_certificate_date;
      this.editusercity = this.updateregistrationDetails[0].city;
      this.editregistration_id = this.updateregistrationDetails[0].registration_id;

    });
  }

  onFileCertiregUpdate(event) {
    this.certificateFile = <File>event.target.files;
  }

  onSubmitdocRegistration(editregistration_id) {
    this.apiService.updateDoctorReg(this.editregisnumber, this.editcountryiduser, this.editregisyear, this.edituserstate, this.editcertiexpyear, this.editusercity, this.certificateFile, editregistration_id).subscribe(
      data => {
        //location.reload();
      });

  }

  educationAddFormProfile: FormGroup;
  submitted2 = false;

  //date picker
  model: NgbDateStruct;
  //end here

  private stepper: Stepper;
  public about_me: any = [];

  button_click: boolean;
  public DrregAbout() {
    console.log("tested");
  }

  next() {
    this.stepper.next();
  }

  selectedItems = [];
  settings = {};
  settingsForspeciality = {};

  itemListNew = [];
  selectedItemsNew = [];
  settingsNew = {};

  treatmentClinic = [];
  selectedTreatment = [];
  settingsTreatment = {};

  getState() {
    this.apiService.getState(this.countryiduser).subscribe((data) => {
      this.state = data['response'];
    });
  }

  getCity() {
    this.apiService.getCity(this.countryiduser, this.userstate).subscribe((data) => {
      this.city = data['response'];


    });

  }

  editgetState() {
    this.apiService.getState(this.editcountryiduser).subscribe((data) => {
      this.state = data['response'];
    });
  }

  editgetCity() {
    this.apiService.getCity(this.editcountryiduser, this.edituserstate).subscribe((data) => {
      this.city = data['response'];


    });

  }

  clinicgetState() {
    this.apiService.clinicgetState(this.clinicForm.value.country).subscribe((data) => {
      this.state = data['response'];
    });
  }

  clinicgetCity() {
    this.apiService.clinicgetCity(this.clinicForm.value.country, this.clinicForm.value.state).subscribe((data) => {
      this.city = data['response'];
    });
  }

  clinicSpeciality;
  getArea() { }

  disabled = false;
  ShowFilter = true;
  limitSelection = false;
  dropdownSettings = {};
  
  constructor(@Inject(DOCUMENT) private document: Document, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
  private dateConfigService: DateConfigService,private apiService: ApiService, private config: NgbDatepickerConfig, private modalService: NgbModal, @Inject(LOCALE_ID) private locale: string, private formBuilder: FormBuilder, public fb: FormBuilder, private cd: ChangeDetectorRef, private utilityService: UtilityService) {
    this.button_click = true;
    const current = new Date();
    config.minDate = { year: 1950, month: 12, day: 31 };
    this.dateOption = this.dateConfigService.config;
    this.displayMonths = this.dateOption.displayMonths;
    this.navigation = this.dateOption.navigation;
    this.showWeekNumbers = this.dateOption.showWeekNumbers;
    this.outsideDays = this.dateOption.outsideDays;
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
  toggleVisibility1(e){
    this.marked1= e.target.checked;
  }
  toggleVisibility2(e){
    this.marked2= e.target.checked;
  }
  toggleVisibility3(e){
    this.marked3= e.target.checked;
  }
  toggleVisibility4(e){
    this.marked4= e.target.checked;
  }
  toggleVisibility5(e){
    this.marked5= e.target.checked;
  }
  toggleVisibility6(e){
    this.marked6= e.target.checked;
  }
  getTreatmentClinic() {

    console.log(this.clinicForm.value.speciality);

    this.apiService.getTreatmnentListByName(this.clinicForm.value.speciality.speciality_name).subscribe((data) => {
      this.treatmentClinic = data['response'];
    });

    this.settingsTreatment = {
      singleSelection: false,
      text: "Select Clinic Treatment",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      enableSearchFilter: true,
      badgeShowLimit: 6
    };
  }



  // public date = new Date();
  onSubmitClinic() {
    this.submittedClinic = true;
    // stop the process here if form is invalid




    if (this.clinicForm.invalid) {
      console.log("all in work failed")
      return;
      console.log("success");
    } else {

      var clientValue = this.clinicForm.value;

      clientValue.speciality = clientValue.speciality.speciality_name;
      clientValue.speciality_id = clientValue.speciality.speciality_id;
      // clientValue.treatment_option_available = 
      var treatment = []
      clientValue.treatment_option_available.forEach(element => {
        treatment.push(element.itemName)
      });
      clientValue.treatment_option_available = treatment.join();

      var FacilitiesClinic = []
      clientValue.clinic_facility.forEach(element => {
        FacilitiesClinic.push(element.itemName)
      });
      clientValue.clinic_facility = FacilitiesClinic.join();

      clientValue.clinic_working_hours.sunday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.monday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.tuesday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.wednesday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.thursday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.friday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.saturday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.everyday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';

      this.apiService
        .postAddClinicBasic(
          clientValue
        ).subscribe(
          data => {
            this.saveImage(data.response);
            this.saveClinicImage(data.response);
            this.saveClinicCertificateImage(data.response);
            //this.document.location.reload();
            //this.calshowDiv.clinic = true; 
            
          });
          
    }

  }


  updateonSubmitClinic() {
    this.submittedClinic = true;
    // stop the process here if form is invalid




    if (this.clinicForm.invalid) {
      console.log("all in work failed")
      return;
      console.log("success");
    } else {

      var clientValue = this.clinicForm.value;

      clientValue.speciality = clientValue.speciality.speciality_name;
      clientValue.speciality_id = clientValue.speciality.speciality_id;
      // clientValue.treatment_option_available = 
      var treatment = []
      clientValue.treatment_option_available.forEach(element => {
        treatment.push(element.itemName)
      });
      clientValue.treatment_option_available = treatment.join();

      

      clientValue.clinic_working_hours.sunday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.monday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.tuesday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.wednesday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.thursday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.friday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.saturday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_working_hours.everyday.appointment_duration = clientValue.appointment_duration ? clientValue.appointment_duration : '';
      clientValue.clinic_id = this.clinicId;      
      this.apiService
        .postEditClinicBasic(
          clientValue
        ).subscribe(
          data => {
            this.saveImage(data.response);
            this.saveClinicImage(data.response);
            this.saveClinicCertificateImage(data.response);
          });
          this.document.location.reload();
    }

  }

  clinicId;
  showClinicUpdateBox:boolean;
  async getClinicData(id) {
    this.showClinicUpdateBox = true;
    var params = {
      clinic_id: id
    }
    this.clinicId = id;
    this.apiService
      .postGetClinic(
        params
      ).subscribe(
        async data => {
          var clinicalForm = data.response[0];
          console.log("get clinic details" + clinicalForm[0]);
          this.clinicForm.patchValue(clinicalForm);
          await this.clinicForm.get('country').setValue(clinicalForm.country);
          console.log(this.clinicForm.get('country').value);

          await this.clinicgetState();
          this.clinicForm.get('state').setValue(clinicalForm.state);
          console.log(this.clinicForm.get('state').value);
          await this.clinicgetCity();
          this.clinicForm.get('city').setValue(clinicalForm.city);
          console.log( this.clinicForm.get('city').value);


          var specialityObj = this.selectSpecalty.filter(function (item, key) {
            return item.speciality_name == clinicalForm.speciality;
          });
          this.clinicForm.get('speciality').setValue(specialityObj[0]);
          await this.getTreatmentClinic();



          var selected_treatment = [];
          var treatment_option_available_arr = clinicalForm.treatment_option_available.split(",");
           treatment_option_available_arr.forEach((ele, key) => {


            this.treatmentClinic.forEach((element, keys) => {
              
              if (element.itemName == ele) {
                selected_treatment.push(element);
              }
            });
            if(treatment_option_available_arr.length ==  key+1){
              this.clinicForm.get('treatment_option_available').setValue(selected_treatment);
            }

          });

          // this.clinicForm.get('treatment_option_available').setValue(selected_treatment);
       
          this.urls = [];

          clinicalForm.clinic_image_detail.forEach((e,k) => {
            var url = 'https://artelir.com:3018'+e.clinic_images
                this.urls.push(url)
              });
              this.imageUrl ="https://artelir.com:3018"+ clinicalForm.clinic_logo ;

              this.showClinicUpdateBox = true;

        });
  }
  saveImage(data) {
    this.apiService
      .postAddCliniLogo(
        data, this.logo
      ).subscribe(
        data => {
        });
  }
  saveClinicImage(data) {
    this.apiService
      .postAddCliniImage(
        data, this.fileUpload
      ).subscribe(
        data => {
        });
  }

  saveClinicCertificateImage(data) {
    this.apiService
      .postAddCliniCertificateImage(
        data, this.certificatefileUpload
      ).subscribe(
        data => {
        });
  }


  clinicForm: FormGroup;
  submittedClinic = false;

  applyAllweeks(){
    var x = this.clinicForm.get('clinic_working_hours').get('everyday').value;
    console.log(x);
    this.theCheckbox = true;
    this.marked  = true;
    this.marked1  = true;
    this.marked2  = true;
    this.marked3  = true;
    this.marked4  = true;
    this.marked5  = true;
    this.marked6  = true;
    
    this.clinicForm.get('clinic_working_hours').get('sunday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('monday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('tuesday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('wednesday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('thursday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('friday').patchValue(x);
    this.clinicForm.get('clinic_working_hours').get('saturday').patchValue(x);
  }

  openRegTerms(content) {
    this.modalService.open(content);
  }

  ngOnInit() {

  
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    this.usersdata = this.utilityService.getCurrentUser();

    this.settingsForspeciality = {
      text: "Select Speciality",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      allowSeachFilter: true
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
      regiscouncilnumber:['', Validators.required],
      uplaodcerti: ['', Validators.required],
      drregterms: ['', Validators.required]
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
 
    this.apiService.getDoctorProfile(this.usersdata.user_id).subscribe((data) => {
      this.submitted = true; 
      this.drprofile = data['response'].professional_details[0];
      this.profilepiceimage = 'https://artelir.com:3018' + data['response'].professional_details[0].profile_image;
      this.user_id = this.drprofile.user_id;
      this.usertitle = this.drprofile.title;
      this.userfirstName = this.drprofile.first_name;
      this.userlastName = this.drprofile.last_name;
      this.useremail = this.drprofile.email_id;
      this.userdob = this.drprofile.date_of_birth;
      this.userccode = this.drprofile.country_code;
      this.usermobile = this.drprofile.mobile_number;
      this.userlaunguge = this.drprofile.select_language;
      this.userspecialty = this.drprofile.speciality;
      this.userwebsite = this.drprofile.website;
      this.aboutme = this.drprofile.about_me;
    });

    this.apiService.facilitiesApi().subscribe((data) => {
      this.facilitiesList = [];
          console.log();
           data['response'].forEach(element => {
            this.facilitiesList.push({ id:element.row_id,itemName:element.meaning })
          });
    })

    this.settingsNew = {
      singleSelection: false,
      text: "Select Clinic Facilities",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 6,
      classes: "myclass custom-class",
      
    };

    this.apiService.getSpecilityHome().subscribe((data) => {
      this.homeSpeciality = data['response'];
    })


    this.apiService.getDoctorEduDetails().subscribe((data) => {
      this.getDataDetails = data['response'];
    })

    this.apiService.getSpeciality().subscribe((data) => {
      this.selectSpecalty = data['response'];
    });

    this.apiService.getDoctorReg(this.usersdata.user_id).subscribe((data) => {
      this.getregDetails = data['response'];

    });


    this.apiService.getEditDetailsEducation(this.usersdata.user_id, 1).subscribe((data) => {
      this.getregDetailsedit = data['response'];
    });
    
    this.apiService.getClinicDetailsList(this.usersdata.user_id).subscribe((data) => {
      this.getClinicList = data['response'];
      this.headClinicname = this.getClinicList[0].clinic_name;
      this.headClinicCity = this.getClinicList[0].city;
    });



    this.apiService.launguageApi().subscribe((data) => {
      this.launguage = [];
      console.log();
       data['response'].forEach(element => {
        this.launguage.push({ id:element.id,itemName:element.meaning })
      });
      
    });

    this.settings = {
      singleSelection: false,
      text: "Select Language",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      enableSearchFilter: true,
      badgeShowLimit: 6

    };

    this.apiService.getClinicSpeciality().subscribe((data) => {
      this.speciality = data['response'];
    });

   this.apiService.countryApi().subscribe((data) => {
      this.countryArr = data['response'];
   });

  //  this.apiService.getJSON().subscribe(data => {
      
   //   this.countryArr = data;
   //   console.log("country data" + data);
  //});


    this.apiService.getTreatmnentList().subscribe((data) => {
      this.treatmentClinic = data['response'];
    });

  this.generateClinicForm();

    // this.stepper = new Stepper(document.querySelector('#stepper1'), {
    //   linear: false,
    //   animation: true
    // })
  
  }

// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 8;
      this.getAddress(this.latitude, this.longitude);
    });
  }
}


markerDragEnd($event: MouseEvent) {
  console.log($event);
  this.latitude = $event.coords.lat;
  this.longitude = $event.coords.lng;
  this.getAddress(this.latitude, this.longitude);
}

getAddress(latitude, longitude) {
  this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
    console.log(results);
    console.log(status);
    if (status === 'OK') {
      if (results[0]) {
        this.zoom = 12;
        this.address = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}


  toggle(i,x) {
    this.show = i;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  
  trackByFn(index ,item){
return index;
  }
 generateClinicForm(){
   this.urls = [];
   this.clinicCertiUrl = [];
   this.imageUrl = './assets/images/profieIcon.png';
  this.clinicForm = this.formBuilder.group({
    clinic_address_line_1: ['', Validators.required],
    clinic_address_line_2: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    method: [''],
    license_name: [''],
    user_type: ['2'],
    website: [''],
    clinic_facility:[''],
    clinic_working_hours: this.formBuilder.group({
      sunday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      saturday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      tuesday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      wednesday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      thursday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      friday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      monday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [''],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
      everyday: this.formBuilder.group({
        afternoonFrom: [''],
        afternoonTo: [''],
        appointment_duration: [],
        eveningFrom: [''],
        eveningTo: [''],
        morningFrom: [''],
        morningTo: [''],
      }),
    }),
    city: ['', Validators.required],
    postal_code: ['', Validators.required],
    clinic_name: ['', Validators.required],
    clinic_contact: ['', Validators.required],
    clinic_address: [''],
    speciality: ['', Validators.required],
    license_certificates: [''],
    license_number: ['', Validators.required],
    license_expiry_date: ['', Validators.required],
    speciality_id: [''],
    treatment_option_available: [''],
    appointment_duration: ['', Validators.required],
    device : ['web']
  });
 }

  onItemTreatmentSelect(item: any) {
    let concat = '';
    this.selectedTreatment.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.custometreatment = concat;
  }
  OnItemTreatmentDeSelect(item: any) {
    let concat = '';
    this.selectedTreatment.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.custometreatment = concat;
  }
  onSelectTreatmentAll(items: any) {
    let concat = '';
    this.selectedTreatment.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.custometreatment = concat;
  }
  onDeSelectTreatmentAll(items: any) {
    let concat = '';
    this.selectedTreatment.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.custometreatment = concat;
  }

  onItemSelect(item: any) {
    let concat = '';
    this.selectedItems.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.customelang = concat;
  }
  OnItemDeSelect(item: any) {
    let concat = '';
    this.selectedItems.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.customelang = concat;
  }
  onSelectAll(items: any) {
    let concat = '';
    this.selectedItems.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.customelang = concat;
  }
  onDeSelectAll(items: any) {
    let concat = '';
    this.selectedItems.forEach((val: any, key: any) => {
      if (typeof val.itemName != undefined)
        concat += val.itemName + ",";
    });
    this.customelang = concat;
  }
  onChangeCountry(items: any) {
    this.countrycode = '+' + items.target.value;
  }
  onDateSelect(items: any) {
    let date = '';
    date = items.year + '-';
    items.month < 10 ? date += '0' + items.month + '-' : date += items.month + '-';
    items.day < 10 ? date += '0' + items.day : date += items.day;
    return date;
  }

  get p() { return this.userFormProfile.controls; }
  get pa() { return this.userAddFormProfile.controls; }
  get h() { return this.educationAddFormProfile.controls; }
  get n() { return this.registrationDetails.controls; }
  get f() { return this.clinicForm.controls; }
  get duration() {
    return this.clinicForm.get('appointment_duration').value ? this.clinicForm.get('appointment_duration').value : '';
  }


}
