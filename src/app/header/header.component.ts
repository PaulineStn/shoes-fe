import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  onSearchChange() {
    this.searchService.updateSearchQuery(this.searchQuery);
  }

}
