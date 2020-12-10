/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {number} */
var LogoType = {
    zip: 0,
    zipmoney: 1,
    zippay: 2,
};
export { LogoType };
LogoType[LogoType.zip] = 'zip';
LogoType[LogoType.zipmoney] = 'zipmoney';
LogoType[LogoType.zippay] = 'zippay';
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.logo = LogoType.zip;
    }
    Object.defineProperty(LogoComponent.prototype, "logoMap", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://zip.co/assets/zip/logos/" + this.logo + "/primary.svg";
        },
        enumerable: true,
        configurable: true
    });
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-logo',
                    template: "<img\n    [src]=\"logoMap\"\n    [alt]=\"logo\" />\n",
                    styles: ["img{display:block;max-height:27px}"]
                }] }
    ];
    LogoComponent.propDecorators = {
        logo: [{ type: Input }]
    };
    return LogoComponent;
}());
export { LogoComponent };
if (false) {
    /** @type {?} */
    LogoComponent.prototype.logo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUcvQyxNQUFHO0lBQ0gsV0FBUTtJQUNSLFNBQU07Ozs7OztBQUdSO0lBQUE7UUFPUyxTQUFJLEdBQWEsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUt2QyxDQUFDO0lBSEMsc0JBQVcsa0NBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLHFDQUFtQyxJQUFJLENBQUMsSUFBSSxpQkFBYyxDQUFDO1FBQ3BFLENBQUM7OztPQUFBOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGdFQUFvQzs7aUJBRXJDOzs7dUJBRUUsS0FBSzs7SUFNUixvQkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLGFBQWE7OztJQUN4Qiw2QkFDcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIExvZ29UeXBlIHtcbiAgemlwLFxuICB6aXBtb25leSxcbiAgemlwcGF5XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ppcC1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2dvOiBMb2dvVHlwZSA9IExvZ29UeXBlLnppcDtcblxuICBwdWJsaWMgZ2V0IGxvZ29NYXAoKSB7XG4gICAgcmV0dXJuIGBodHRwczovL3ppcC5jby9hc3NldHMvemlwL2xvZ29zLyR7dGhpcy5sb2dvfS9wcmltYXJ5LnN2Z2A7XG4gIH1cbn1cbiJdfQ==