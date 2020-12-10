/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {number} */
const LogoType = {
    zip: 0,
    zipmoney: 1,
    zippay: 2,
};
export { LogoType };
LogoType[LogoType.zip] = 'zip';
LogoType[LogoType.zipmoney] = 'zipmoney';
LogoType[LogoType.zippay] = 'zippay';
export class LogoComponent {
    constructor() {
        this.logo = LogoType.zip;
    }
    /**
     * @return {?}
     */
    get logoMap() {
        return `https://zip.co/assets/zip/logos/${this.logo}/primary.svg`;
    }
}
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
if (false) {
    /** @type {?} */
    LogoComponent.prototype.logo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUcvQyxNQUFHO0lBQ0gsV0FBUTtJQUNSLFNBQU07Ozs7OztBQVFSLE1BQU0sT0FBTyxhQUFhO0lBTDFCO1FBT1MsU0FBSSxHQUFhLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFLdkMsQ0FBQzs7OztJQUhDLElBQVcsT0FBTztRQUNoQixPQUFPLG1DQUFtQyxJQUFJLENBQUMsSUFBSSxjQUFjLENBQUM7SUFDcEUsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixnRUFBb0M7O2FBRXJDOzs7bUJBRUUsS0FBSzs7OztJQUFOLDZCQUNxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gTG9nb1R5cGUge1xuICB6aXAsXG4gIHppcG1vbmV5LFxuICB6aXBwYXlcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnemlwLWxvZ28nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9nby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ28uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGxvZ286IExvZ29UeXBlID0gTG9nb1R5cGUuemlwO1xuXG4gIHB1YmxpYyBnZXQgbG9nb01hcCgpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vemlwLmNvL2Fzc2V0cy96aXAvbG9nb3MvJHt0aGlzLmxvZ299L3ByaW1hcnkuc3ZnYDtcbiAgfVxufVxuIl19