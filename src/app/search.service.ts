import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService {

  data: any;

  constructor(private http: Http) {
    http.get('/api/articles.json')
      .subscribe(
        (value: Response) => {
          this.data = value.json();
        }
      )
  }

  keyword: string;

  doSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

  doEnterSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

}
