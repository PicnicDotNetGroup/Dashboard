import 'rxjs';
import 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";

import { BaseHttpService } from './base.api';

@Injectable()

export class HolidaysService extends BaseHttpService
{
    constructor(private http:Http) {
        super(http);
     }

    getAll() {
       super.get("api/calendar")
                .then(res => res)
                .catch(err=>console.log("HolidayError"));
    }
}