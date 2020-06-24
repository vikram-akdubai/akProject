import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';
import 'aos/dist/aos.css'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  title = 'Healthcare for Individuals Health Interface';

  constructor(private titleService: Title, private metaService: Meta) {}

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
