import { Component, OnInit } from '@angular/core';
import { HolidaysService } from "../../api/shared";
import { CalendarItem } from '../../models/models';
import { List } from 'linqts';

@Component({
  selector: 'holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private holidaysService:HolidaysService) { }

  //Linq for TS:
  //https://github.com/kutyel/linq.ts
  //http://flaviocorpa.com/linq.ts/docs/classes/list/index.html

  holidays: CalendarItem[]; 

  ngOnInit() {
    this.init();
  }

  async init() {
    this.holidays = await this.holidaysService.getAll();
    var a = new List<CalendarItem>(this.holidays);
  }

}
