import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-barra-cerca',
  imports: [FormsModule],
  templateUrl: './barra-cerca.html',
  styleUrl: './barra-cerca.scss',
})
export class BarraCerca {
  @Output('search-term') searchTerm = new EventEmitter<string>();

  searchText: string = '';

  onSearchTermChange() 
  {
    this.searchTerm.emit(this.searchText);
  }
  onSearchTermErased(value: string) {
    if (!value)
      this.searchTerm.emit('');
  }
}
