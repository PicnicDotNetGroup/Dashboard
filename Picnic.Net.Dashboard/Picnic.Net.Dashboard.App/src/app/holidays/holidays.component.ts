import { Component, OnInit } from '@angular/core';
import { HolidaysService } from "../../api/shared";

@Component({
  selector: 'holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private holidaysService:HolidaysService) { }

  ngOnInit() {
    this.holidaysService.getAll();
  }

}
