import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, OnInit } from '@angular/core'
import { HolidaysComponent, DateComponent, HelloWorldComponent } from '../components';
@Component({
    selector: 'app-dashboard',
    templateUrl: './app-dashboard.component.html',
})

export class AppDashboard implements OnInit {

  components: Array<any> = null;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {

  //if you wanna to add component:
  //add component here to list
  //add component to entry components in app.module.ts

    this.components = [
      HolidaysComponent,
      HelloWorldComponent,
      DateComponent,
    ];

  }
}
