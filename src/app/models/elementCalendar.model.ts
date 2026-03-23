export interface ElementCalendar {
  id: number;
  name: string;
  timeInMinutes: number;
  dateStart: Date;
  dateEnd?: Date;
}