import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  lesson$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('2NW92uRG2kCYQi60eoWAQe')

    this.lesson$ = this.contentful.getContent('2NW92uRG2kCYQi60eoWAQe')

  }

}
