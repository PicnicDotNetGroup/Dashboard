import { Component, OnInit } from '@angular/core';
import { HolidaysService } from "../../api/shared";
import { CalendarItem } from '../../models/models';
import { List } from 'linqts';
import { Observable } from 'rxjs/Rx';


import {
  MatCard,
} from '@angular/material';

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

  nearestHolidays: any[]; 
  

  ngOnInit() {
    this.init();
    Observable.interval(20000).subscribe(x => {
      this.init();
      console.log("Refresg")
    });
  }

  async init() {
    var holidays = await this.holidaysService.getAll();

    this.nearestHolidays = new List<CalendarItem>(holidays)
      .Select(x => ({
        country: x.description,
        description: new List<CalendarItem>(x.holidays).FirstOrDefault().description,
        date: new List<CalendarItem>(x.holidays).FirstOrDefault().date,
      }))
      .ToArray();
  }


}
