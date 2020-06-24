import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artslider',
  templateUrl: './artslider.component.html',
  styleUrls: ['./artslider.component.css'],
  providers: [NgbCarouselConfig]
})
export class ArtsliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
