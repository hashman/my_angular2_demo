import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor() { }

  keyword: string;

  doSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

  doEnterSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

}
