import 'rxjs';
import 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";

import { BaseHttpService } from './base.api';
import { CalendarItem } from './../models/models';

@Injectable()

export class HolidaysService extends BaseHttpService
{
    constructor(private http:Http) {
        super(http);
     }

    async getAll(): Promise<Array<CalendarItem>> {

      var result = null;
        await super.get("api/calendar")
          .then(res => {
            result = res as CalendarItem[];
          })
          .catch(err => console.log("HolidayError", err));
        return result;
    }
}
