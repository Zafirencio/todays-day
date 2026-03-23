import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementCalendar } from './models/elementCalendar.model';
import { ELEMENT_CALENDAR_MOCK } from './mocks/data-mock';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ioc-angular-todaysday-joelfont');
  elementCalendarList: ElementCalendar[] = ELEMENT_CALENDAR_MOCK;
}
