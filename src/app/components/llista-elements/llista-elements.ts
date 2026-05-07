import { Component, Input } from '@angular/core';
import { ElementCalendar } from '../../models/elementCalendar.model';
import { TargetaElement } from '../targeta-element/targeta-element';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-llista-elements',
  imports: [TargetaElement, ScrollingModule],
  templateUrl: './llista-elements.html',
  styleUrl: './llista-elements.scss',
})
export class LlistaElements {
  @Input() elements: ElementCalendar[] = [];

  onElementClicked(element: ElementCalendar) {
    console.log('Element clicked:', element);
  }

  trackById(index: number, item: ElementCalendar): string
  {
    return item.id; //trackById ens ajuda a trobar l'event al calendari per la seva ID.
  }
}