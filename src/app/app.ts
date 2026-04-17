import { Component, inject, OnInit, } from '@angular/core';
import { ElementService } from './services/element.service';
import { BarraCerca } from './components/barra-cerca/barra-cerca';
import { LlistaElements } from './components/llista-elements/llista-elements';
import { PreferitsService } from './services/preferits.service';
import { PreferitsPanel } from './components/preferits-panel/preferits-panel';

@Component({
  selector: 'app-root',
  imports: [BarraCerca, LlistaElements, PreferitsPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  elementService = inject(ElementService);
  preferitsService = inject(PreferitsService);

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }
  
  filterCalendar(searchTerm: string) 
  {
    if(!searchTerm) {
      this.elementService.obtenirPopulars()
      return;
    } else {
      this.elementService.cercar(searchTerm);
    }
  }
}
