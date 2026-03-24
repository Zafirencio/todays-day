import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common'; //PIPE IMPORTAT
import { ElementCalendar } from '../../models/elementCalendar.model';

@Component({
  selector: 'app-targeta-element',
  imports: [DatePipe],
  templateUrl: './targeta-element.html',
  styleUrl: './targeta-element.scss',
})
export class TargetaElement {
  @Input('element-calendar') elementCalendar!: ElementCalendar;

  @Output('element-clicked') elementClicked = new EventEmitter<ElementCalendar>();

  onElementClick() {
    this.elementClicked.emit(this.elementCalendar);
  }
}
