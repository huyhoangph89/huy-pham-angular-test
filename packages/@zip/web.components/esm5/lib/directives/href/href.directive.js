/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var HrefDirective = /** @class */ (function () {
    function HrefDirective() {
        this.zipHref = '';
    }
    /**
     * @return {?}
     */
    HrefDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        window.location.assign(this.zipHref);
    };
    HrefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[zipHref]'
                },] }
    ];
    HrefDirective.propDecorators = {
        zipHref: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return HrefDirective;
}());
export { HrefDirective };
if (false) {
    /** @type {?} */
    HrefDirective.prototype.zipHref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaHJlZi9ocmVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9EO0lBQUE7UUFLVyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBTXhCLENBQUM7Ozs7SUFIRywrQkFBTzs7O0lBRFA7UUFFSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBVkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OzBCQUVJLEtBQUs7MEJBR0wsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFJckMsb0JBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSxhQUFhOzs7SUFDdEIsZ0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t6aXBIcmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgSHJlZkRpcmVjdGl2ZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgemlwSHJlZiA9ICcnO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy56aXBIcmVmKTtcbiAgICB9XG59XG4iXX0=