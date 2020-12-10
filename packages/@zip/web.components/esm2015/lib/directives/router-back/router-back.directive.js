/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
export class RouterBackDirective {
    /**
     * @param {?} ngLocation
     */
    constructor(ngLocation) {
        this.ngLocation = ngLocation;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.ngLocation.back();
    }
}
RouterBackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[zipRouterBack]'
            },] }
];
/** @nocollapse */
RouterBackDirective.ctorParameters = () => [
    { type: Location }
];
RouterBackDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouterBackDirective.prototype.ngLocation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3JvdXRlci1iYWNrL3JvdXRlci1iYWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDNUIsWUFDWSxVQUFvQjtRQUFwQixlQUFVLEdBQVYsVUFBVSxDQUFVO0lBQzdCLENBQUM7Ozs7SUFHSixPQUFPO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFYSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQUpRLFFBQVE7OztzQkFVWixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBSDdCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t6aXBSb3V0ZXJCYWNrXSdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyQmFja0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmdMb2NhdGlvbjogTG9jYXRpb25cbiAgICApIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5uZ0xvY2F0aW9uLmJhY2soKTtcbiAgICB9XG59XG4iXX0=