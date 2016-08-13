import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'The Will Will Web';
  title_url = 'http://blog.miniasp.com/';

  constructor(private searchSvc: SearchService) { }
}
