/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { ComponentInstance } from './component-instance.model';
import * as i0 from "@angular/core";
var ComponentService = /** @class */ (function () {
    function ComponentService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ComponentService.prototype.instantiate = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var instance = new ComponentInstance(componentRef);
        instance.onDestroy((/**
         * @return {?}
         */
        function () { return _this.appRef.detachView(componentRef.hostView); }));
        return instance;
    };
    ComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ ComponentService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentService_Factory() { return new ComponentService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: ComponentService, providedIn: "root" });
    return ComponentService;
}());
export { ComponentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbXBvbmVudC9jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQW1CLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFL0Q7SUFLSSwwQkFDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7OztJQUVKLHNDQUFXOzs7OztJQUFYLFVBQXFCLFNBQWM7UUFBbkMsaUJBZ0JDOztZQWZTLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzdDLHVCQUF1QixDQUFJLFNBQVMsQ0FBQzthQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRXhDLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixDQUNsQyxZQUFZLENBQ2Y7UUFFRCxRQUFRLENBQUMsU0FBUzs7O1FBQ2QsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBN0MsQ0FBNkMsRUFDdEQsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7O2dCQTNCSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQUw4Qix3QkFBd0I7Z0JBQW1CLGNBQWM7Z0JBQW5FLFFBQVE7OzsyQkFBN0I7Q0ErQkMsQUE1QkQsSUE0QkM7U0F6QlksZ0JBQWdCOzs7Ozs7SUFHckIsb0RBQTBEOzs7OztJQUMxRCxrQ0FBOEI7Ozs7O0lBQzlCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgQXBwbGljYXRpb25SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEluc3RhbmNlIH0gZnJvbSAnLi9jb21wb25lbnQtaW5zdGFuY2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgICApIHt9XG5cbiAgICBpbnN0YW50aWF0ZTxUID0gYW55Pihjb21wb25lbnQ6IGFueSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudClcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbXBvbmVudEluc3RhbmNlPFQ+KFxuICAgICAgICAgICAgY29tcG9uZW50UmVmXG4gICAgICAgICk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25EZXN0cm95KFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbn1cbiJdfQ==