import { Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { ComponentInstance } from './component-instance.model';
export declare class ComponentService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    instantiate<T = any>(component: any): ComponentInstance<T>;
}
