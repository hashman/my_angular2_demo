import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  keyword: string;

  doSearch(keywordInput) {
    this.keyword = keywordInput.value;
  }

  doEnterSearch($event, keywordInput) {
    if ($event.keyCode === 13) {
      this.keyword = keywordInput.value;
    }
  }
}
