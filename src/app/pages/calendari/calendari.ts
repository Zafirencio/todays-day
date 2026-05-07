import { Component, inject, OnInit } from '@angular/core';
import { ElementService } from '../../services/element.service';
import { LlistaElements } from '../../components/llista-elements/llista-elements';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-calendari',
  standalone: true,
  imports: [LlistaElements, ScrollingModule], 
  template: `
    <app-llista-elements [elements]="elementService.elements()"></app-llista-elements>
  `
})
export class Calendari implements OnInit 
{
  elementService = inject(ElementService);

  ngOnInit(): void 
  {
    this.elementService.obtenirPopulars();
  }
}