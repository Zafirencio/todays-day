import { ElementCalendar } from '../models/elementCalendar.model';

export const ELEMENT_CALENDAR_MOCK: ElementCalendar[] = [
  { id: 1, name: 'Reunió amb el client', timeInMinutes: 60, dateStart: new Date() },
  { id: 2, name: 'Dinar d\'empresa', timeInMinutes: 90, dateStart: new Date(), dateEnd: new Date() },
  { id: 3, name: 'Revisió de projecte', timeInMinutes: 30, dateStart: new Date() },
  { id: 4, name: 'Capacitació en Angular', timeInMinutes: 120, dateStart: new Date(), dateEnd: new Date() },
  { id: 5, name: 'Reunió d\'equip', timeInMinutes: 45, dateStart: new Date() },
  {id: 6, name: 'Presentació de resultats', timeInMinutes: 60, dateStart: new Date(), dateEnd: new Date() },
  { id: 7, name: 'Webinar de l\'empresa a futurs clients', timeInMinutes: 90, dateStart: new Date() },
  { id: 8, name: 'Reunió amb el departament de màrqueting', timeInMinutes: 60, dateStart: new Date(), dateEnd: new Date() },
  { id: 9, name: 'Revisió de codi Endesa', timeInMinutes: 30, dateStart: new Date() },
  { id: 10, name: 'Reunió de seguiment', timeInMinutes: 45, dateStart: new Date(), dateEnd: new Date() }
];