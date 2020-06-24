import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  title = 'HI Doctors- Grow Online Presence, Grow Network and Manage Practice for Free';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Manage appointments, reach out to patients, access new patients, ai in healthcare, electronic health records, electronic medical records, manage hospital staff, manage users, free patient management software, Mobile app to manage patient appointments, plan treatment'},
      {name: 'description', content: 'AI enabled platform to grow your online presence, Reach out to millions of patients, help them find you easily,share your knowledge, manage appointment schedules and build your brand with HI'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

}
