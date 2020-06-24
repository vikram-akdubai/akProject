import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Blog: Your Healthy Life Starts Here';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Virtual consultancy; Covid19, corona virus, pregnancy and corona virus, covid 19 management guidelines, corona virus myths and facts, healthcare'},
      {name: 'description', content: 'Digital health blogs featuring the latest news and trends in healthcare for today human needs.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
