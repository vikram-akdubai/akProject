import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  title = 'Join Now- Health Interface';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Manage appointments, reach out to patients, access new patients, ai in healthcare, electronic health records, electronic medical records, manage hospital staff, manage users, free patient management softwareVirtual consultancy; Covid19, corona virus, pregnancy and corona virus, covid 19 management guidelines, corona virus myths and facts, healthcare'},
      {name: 'description', content: 'AI enabled platform to grow your online presence, Reach out to millions of patients, help them find you easily,share your knowledge, manage appointment schedules and build your brand with HI; Register and get started in less than 60 seconds'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
