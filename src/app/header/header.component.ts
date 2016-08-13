import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web!!';
  title_url = 'http://blog.miniasp.com/';
  sub_title = '記載著 <b>Will</b> 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit() {
  }

}
