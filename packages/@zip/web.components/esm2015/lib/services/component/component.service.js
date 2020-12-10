/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { ComponentInstance } from './component-instance.model';
import * as i0 from "@angular/core";
export class ComponentService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    instantiate(component) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const instance = new ComponentInstance(componentRef);
        instance.onDestroy((/**
         * @return {?}
         */
        () => this.appRef.detachView(componentRef.hostView)));
        return instance;
    }
}
ComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ ComponentService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentService_Factory() { return new ComponentService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: ComponentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ComponentService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbXBvbmVudC9jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQW1CLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFLL0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRXpCLFlBQ1ksd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLFFBQWtCO1FBRmxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDOzs7Ozs7SUFFSixXQUFXLENBQVUsU0FBYzs7Y0FDekIsWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDN0MsdUJBQXVCLENBQUksU0FBUyxDQUFDO2FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFeEMsUUFBUSxHQUFHLElBQUksaUJBQWlCLENBQ2xDLFlBQVksQ0FDZjtRQUVELFFBQVEsQ0FBQyxTQUFTOzs7UUFDZCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQ3RELENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7WUEzQkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTDhCLHdCQUF3QjtZQUFtQixjQUFjO1lBQW5FLFFBQVE7Ozs7Ozs7O0lBU3JCLG9EQUEwRDs7Ozs7SUFDMUQsa0NBQThCOzs7OztJQUM5QixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEFwcGxpY2F0aW9uUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRJbnN0YW5jZSB9IGZyb20gJy4vY29tcG9uZW50LWluc3RhbmNlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICAgKSB7fVxuXG4gICAgaW5zdGFudGlhdGU8VCA9IGFueT4oY29tcG9uZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQpXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnRJbnN0YW5jZTxUPihcbiAgICAgICAgICAgIGNvbXBvbmVudFJlZlxuICAgICAgICApO1xuXG4gICAgICAgIGluc3RhbmNlLm9uRGVzdHJveShcbiAgICAgICAgICAgICgpID0+IHRoaXMuYXBwUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG59XG4iXX0=