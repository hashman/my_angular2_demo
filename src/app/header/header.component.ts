import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web!!';
  title_url = 'http://blog.miniasp.com/';
  sub_title = '記載著 Will 在網路世界的學習心得與技術分享';
  like_num = 10;

  constructor() { }

  ngOnInit() {
  }

  plusOne($event: MouseEvent) {
    console.log($event);
    if ($event.metaKey) {
      this.like_num--;
    } else {
      this.like_num++;
    }
  }

  returnColor() {
    return this.like_num%2 == 1 ? 'red' : 'yellow';
  }

}
