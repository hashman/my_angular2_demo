import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() title_url: string;

  sub_title = '記載著 Will 在網路世界的學習心得與技術分享';
  like_num = 10;

  constructor(private searchSvc: SearchService) { }

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
