import { Component, Input, Output, EventEmitter, inject, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ElementCalendar } from '../../models/elementCalendar.model';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-targeta-element',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './targeta-element.html',
  styleUrl: './targeta-element.scss',
})
export class TargetaElement {
  @Input('element-calendar') elementCalendar!: ElementCalendar;

  @Output('element-clicked') elementClicked = new EventEmitter<ElementCalendar>();

  public preferitsService = inject(PreferitsService);

  onElementClick() {
    this.elementClicked.emit(this.elementCalendar);
  }

  togglePreferit(event: Event)
  {
    event.stopPropagation();

    if (this.preferitsService.esPreferit(this.elementCalendar.id)) {
      this.preferitsService.eliminarPreferit(this.elementCalendar.id);
    } else {
      this.preferitsService.afegirPreferit(this.elementCalendar);
    }
  }
}
