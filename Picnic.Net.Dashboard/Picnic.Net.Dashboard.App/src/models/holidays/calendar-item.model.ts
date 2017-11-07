
export class CalendarItem {

  constructor(id: Number, date: Date, description: String, holidays: Array<CalendarItem>) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.holidays = holidays;
  }
  id: Number;
  date: Date;
  description: String;
  holidays: Array<CalendarItem>;
}
