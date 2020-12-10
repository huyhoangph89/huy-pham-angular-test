/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
var RouterBackDirective = /** @class */ (function () {
    function RouterBackDirective(ngLocation) {
        this.ngLocation = ngLocation;
    }
    /**
     * @return {?}
     */
    RouterBackDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.ngLocation.back();
    };
    RouterBackDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[zipRouterBack]'
                },] }
    ];
    /** @nocollapse */
    RouterBackDirective.ctorParameters = function () { return [
        { type: Location }
    ]; };
    RouterBackDirective.propDecorators = {
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return RouterBackDirective;
}());
export { RouterBackDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouterBackDirective.prototype.ngLocation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3JvdXRlci1iYWNrL3JvdXRlci1iYWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBSUksNkJBQ1ksVUFBb0I7UUFBcEIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtJQUM3QixDQUFDOzs7O0lBR0oscUNBQU87OztJQURQO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFYSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBSlEsUUFBUTs7OzBCQVVaLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSXJDLDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBVFksbUJBQW1COzs7Ozs7SUFFeEIseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ppcFJvdXRlckJhY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJCYWNrRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ0xvY2F0aW9uOiBMb2NhdGlvblxuICAgICkge31cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm5nTG9jYXRpb24uYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==