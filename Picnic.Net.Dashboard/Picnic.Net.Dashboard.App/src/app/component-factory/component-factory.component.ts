import { Component, OnInit, ViewChild, ViewContainerRef, Input, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'component-factory',
  templateUrl: './component-factory.component.html',
})
//Inspiration and more complex example you can find here (run component with input values)
//https://stackoverflow.com/questions/42620592/angular-2-dynamically-create-components-in-ngfor

export class ComponentFactoryComponent{

  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  @Input() set componentData(component) {
    if (!component) {
      return;
    }

     let factory = this.resolver.resolveComponentFactory(component);
     let componentRef = this.dynamicComponentContainer.createComponent(factory);
     componentRef.changeDetectorRef.detectChanges();
  }

  constructor(private resolver: ComponentFactoryResolver) { }

}
