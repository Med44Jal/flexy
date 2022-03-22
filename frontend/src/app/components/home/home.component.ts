import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  data;
  p;
  constructor(config: NgbCarouselConfig,private http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation = true;
  }

  ngOnInit(): void {
    this.getData();
  }

  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
        this.data = data;
      }
    );;
   }
}
