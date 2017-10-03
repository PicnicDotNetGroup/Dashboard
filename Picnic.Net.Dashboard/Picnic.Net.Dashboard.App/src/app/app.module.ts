import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';

@NgModule({
    declarations: [
        HelloWorldComponent,
        DateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [HelloWorldComponent, DateComponent]
})
export class AppModule { }
