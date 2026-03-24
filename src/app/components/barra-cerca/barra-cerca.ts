import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  imports: [],
  templateUrl: './barra-cerca.html',
  styleUrl: './barra-cerca.scss',
})
export class BarraCerca {
  @Output('search-term') searchTerm = new EventEmitter<string>();

  onSearchTermChange(event: Event) 
  {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.emit(inputElement.value);
  } 
}
