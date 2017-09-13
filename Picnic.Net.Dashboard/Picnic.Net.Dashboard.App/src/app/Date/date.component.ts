import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'

@Component({
    selector: 'date',
    template: `Today is {{date}}`
})

export class DateComponent implements OnInit {
    date: string;
    constructor(private _httpService: Http) { }
    
    ngOnInit() {
        this._httpService.get('/api/date').subscribe(d => {
            this.date = d.text();
        });
    }
}
