import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppDashboard } from './app-dashboard/app-dashboard.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { HolidaysComponent } from './holidays/holidays.component';

//services
import { HolidaysService } from '../api/shared';

@NgModule({
    declarations: [
        AppDashboard,
        HelloWorldComponent,
        DateComponent,
        HolidaysComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [HolidaysService],
    bootstrap: [AppDashboard]
})
export class AppModule { }
