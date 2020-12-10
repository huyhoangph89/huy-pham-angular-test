/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class HrefDirective {
    constructor() {
        this.zipHref = '';
    }
    /**
     * @return {?}
     */
    onClick() {
        window.location.assign(this.zipHref);
    }
}
HrefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[zipHref]'
            },] }
];
HrefDirective.propDecorators = {
    zipHref: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    HrefDirective.prototype.zipHref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaHJlZi9ocmVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9ELE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS1csWUFBTyxHQUFHLEVBQUUsQ0FBQztJQU14QixDQUFDOzs7O0lBSEcsT0FBTztRQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFWSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7OztzQkFFSSxLQUFLO3NCQUdMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFIakMsZ0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t6aXBIcmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgSHJlZkRpcmVjdGl2ZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgemlwSHJlZiA9ICcnO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy56aXBIcmVmKTtcbiAgICB9XG59XG4iXX0=