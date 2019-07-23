import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Practice directives';
  flag: boolean;

  images: string[];
  imagePath: string;
  constructor() {
    this.flag = false;
    this.imagePath = '/assets/img/img1.jpg';
    this.images = ['img1.jpg', 'img2.jpg'];
  }

  changeValue() {
    this.flag = !this.flag;
    console.log(this.flag);
    if ( this.flag ) {
      this.images[0] = 'img3.jpg';
      this.images[1] = 'img4.jpg';
    } else {
      this.images[0] = 'img1.jpg';
      this.images[1] = 'img2.jpg';
    }

  }
}
