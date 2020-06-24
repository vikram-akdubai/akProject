import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {

optionsSelect: Array<any>;
countryClinic;
state;
city;

name = 'Angular 4';
  enableTxtBoxTwo = true;
  enableTxtBoxThree = true;
  enableTxtBoxFour = true;
  enableTxtBoxFive = true;
  enableTxtBoxSix = true;
  enableTxtBoxSeven = true;
  enableTxtBoxEight = true;

  urls = [];
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
  

  itemList = [];
  selectedItems = [];
  settings = {};

  treatmentClinic = [];
  selectedTreatment = [];
  settingsTreatment = {};

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, public fb: FormBuilder, private cd: ChangeDetectorRef) { 
   
  }

  registrationForm = this.fb.group({
    file: [null]
  })  

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  submitted

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
    this.submitted = true;
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
        }
    //return false;
  }
  clinicForm: FormGroup;
  submittedClinic = false;

  ngOnInit(){
    this.apiService.getTreatmnentList().subscribe((data)=>{
      console.log(data);
      this.treatmentClinic = data['response'];
    });

    this.clinicForm = this.formBuilder.group({
      clinicName: ['', Validators.required],
      addressOne: ['', Validators.required],
      clinicCountry: ['', Validators.required],
      clinicState: ['', Validators.required],
      clinicCity: ['', Validators.required],
  });

  this.itemList = [
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

  this.settings = {
    text: "Select Clinic Facilities",
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


  }

onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any) {
    console.log(items);
}
onDeSelectAll(items: any) {
    console.log(items);
}

  // convenience getter for easy access to form fields
  get f() { return this.clinicForm.controls; }

}
