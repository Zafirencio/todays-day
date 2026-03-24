import { Component, signal } from '@angular/core';
import { ElementCalendar } from './models/elementCalendar.model';
import { ELEMENT_CALENDAR_MOCK } from './mocks/data-mock';
import { BarraCerca } from './components/barra-cerca/barra-cerca';
import { LlistaElements } from './components/llista-elements/llista-elements';

@Component({
  selector: 'app-root',
  imports: [BarraCerca, LlistaElements],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  mockElements: ElementCalendar[] = ELEMENT_CALENDAR_MOCK;
  filteredElements: ElementCalendar[] = this.mockElements;
  
  filterCalendar(searchTerm: string) 
  {
    if(!searchTerm) {
      this.filteredElements = this.mockElements;
      return;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    this.filteredElements = this.mockElements.filter(element => element.name.toLowerCase().includes(lowerSearchTerm));
  }
}
