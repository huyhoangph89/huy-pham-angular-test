/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class IconComponent {
    constructor() {
        this.icon = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set src(value) {
        this.icon = `zip-icon zip-icon-${value}`;
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-icon',
                template: '',
                styles: ["@import url(https://zip.co/assets/zip/icons/style.css);:host{display:inline-block}"]
            }] }
];
IconComponent.propDecorators = {
    icon: [{ type: HostBinding, args: ['class',] }],
    src: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IconComponent.prototype.icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlELE1BQU0sT0FBTyxhQUFhO0lBTDFCO1FBTTBCLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7Ozs7SUFIRyxJQUFhLEdBQUcsQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7OztZQVRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7O2FBRWI7OzttQkFFSSxXQUFXLFNBQUMsT0FBTztrQkFDbkIsS0FBSzs7OztJQUROLDZCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ppcC1pY29uJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGljb24gPSAnJztcbiAgICBASW5wdXQoKSBzZXQgc3JjKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGB6aXAtaWNvbiB6aXAtaWNvbi0ke3ZhbHVlfWA7XG4gICAgfVxufVxuIl19