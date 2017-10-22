import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppDashboard } from './app-dashboard/app-dashboard.component';
import { ComponentFactoryComponent } from './component-factory/component-factory.component';
import { HolidaysComponent, HelloWorldComponent, DateComponent } from './components';

//services
import { HolidaysService } from '../api/shared';


@NgModule({
    declarations: [
        AppDashboard,
        HelloWorldComponent,
        DateComponent,
        HolidaysComponent,
        ComponentFactoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    entryComponents: [HolidaysComponent, HelloWorldComponent, DateComponent],
    providers: [HolidaysService],
    bootstrap: [AppDashboard]
})
export class AppModule { }
