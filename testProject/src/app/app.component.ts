import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { Title, Meta } from '@angular/platform-browser';
import {
	Event,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router
  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 	loading = false;

	 // Sets initial value to true to show loading spinner on first load
	// loading = true
  	separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	title = 'Health Interface- #1 doctor search and Health networking app';
  	constructor(private router: Router, private titleService: Title, private metaService: Meta) {
		this.router.events.subscribe((event: Event) => {
			switch (true) {
			  case event instanceof NavigationStart: {
				this.loading = true;
				break;
			  }
	  
			  case event instanceof NavigationEnd:
			  case event instanceof NavigationCancel:
			  case event instanceof NavigationError: {
				this.loading = false;
				break;
			  }
			  default: {
				break;
			  }
			}
		  });
}


	ngOnInit(){
		this.titleService.setTitle(this.title);
    	this.metaService.addTags([
      {name: 'keywords', content: 'Angular, Universal, Patient engagement platform in UAE, Patient engagement platform in USA, Online appointment with Doctor, Find a Doctor, Digital presence of Doctors, Appointment management software, Join online Doctors, Online community of Doctors, Online community of Pharmacy, Spcialty based doctor, talk to doctor, Urgent care near me, Best Doctor near me, Clinic near me, Best pediatrician near me, Best Cardiologist near me, Best Dermatologist near me, Best Plastic Surgeon near me, Best gyneacologist near me, Best Psychiatrist near me, Online appointment management system for Doctors, corona virus live updates, Telehealth, Telemedicine'},
      {name: 'description', content: 'Globally interconnected Digital Healthcare Ecosystem. Join Now for Free and grow your Digital presence; Find best doctors, book appointment and get useful health tips.'},
      {name: 'robots', content: 'index, follow'}
    ]);
	}
  
}
