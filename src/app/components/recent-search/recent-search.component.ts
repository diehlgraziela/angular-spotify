import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recent-search',
  imports: [FormsModule],
  templateUrl: './recent-search.component.html',
  styleUrl: './recent-search.component.scss',
})
export class RecentSearchComponent {
  search = '';

  recentSearches = [
    'Top Brasil',
    'Top Global',
    'Radar de Novidades',
    'Sei lá',
    'Acolá',
  ];

  setSearch(search: string) {
    this.search = search;
  }

  handleSearch() {
    console.log('Pesquisar');
  }
}
