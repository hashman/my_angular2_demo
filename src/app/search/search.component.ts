import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;

  constructor() { }

  ngOnInit() {
  }

  @Output() search = new EventEmitter<string>();

  doSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

  doEnterSearch(keywordInput) {
    this.keyword = keywordInput.value;
    this.search.emit(keywordInput.value);
  }

}
