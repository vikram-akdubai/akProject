import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
	Router,
	// import as RouterEvent to avoid confusion with the DOM Event
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Sets initial value to true to show loading spinner on first load
  loading = true
  title = 'Healthcare for Individuals Health Interface';

  constructor(private router: Router, private titleService: Title, private metaService: Meta) {
    this.router.events.subscribe((e : RouterEvent) => {
			this.navigationInterceptor(e);
		  })
  }

  // Shows and hides the loading spinner during RouterEvent changes
navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.loading = true
  }
  if (event instanceof NavigationEnd) {
    this.loading = false
  }

  // Set loading state to false in both of the below events to hide the spinner in case a request fails
  if (event instanceof NavigationCancel) {
    this.loading = false
  }
  if (event instanceof NavigationError) {
    this.loading = false
  }
}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Find a Dr by Specialty;Find a Dr by Gender; Find a Dr by Insurance, Find a Dr by Treatment, Find a Dr by language, Find a Dr by Gender, Find a Dr by Day and Time, Medicine Remainder, Electronic medical records, Electronic Health records, Encrypted Health records, Mobile app to find Doctor'},
      {name: 'description', content: 'Your Healthy life starts here. Find a Doctor based on specialty, treatment, insurance, language, gender and your best suitable day and time. Don’t miss on your medicine. Access your electronic health records from any part of the world'},
      {name: 'robots', content: 'index, follow'}
    ]);

    AOS.init();
  }

  
}
