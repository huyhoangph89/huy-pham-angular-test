/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HeaderCartComponent {
    constructor() {
        this.parsedAmount = '00.00';
        this.items = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set amount(value) {
        this.parsedAmount = parseFloat(value).toFixed(2);
    }
    /**
     * @return {?}
     */
    get amount() {
        return this.parsedAmount;
    }
}
HeaderCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-header-cart',
                template: `
        <div>{{ items }}</div>
        <zip-icon src="cart"></zip-icon>
        <p>{{ parsedAmount }}</p>
    `,
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{display:block;text-align:center;cursor:default}:host ::ng-deep>*{position:relative;z-index:1;color:#1b1e63;margin:0}div{background-color:#f15c3e;color:#fff;height:14px;width:14px;font-weight:600;border-radius:50%;display:flex;justify-content:center;align-items:center;margin:0 0 -9px auto;z-index:2;font-size:10px}zip-icon{font-size:24px}p{line-height:10px;font-size:10px;letter-spacing:.5px}"]
            }] }
];
HeaderCartComponent.propDecorators = {
    items: [{ type: Input }],
    amount: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HeaderCartComponent.prototype.parsedAmount;
    /** @type {?} */
    HeaderCartComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci1jYXJ0L2hlYWRlci1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXakQsTUFBTSxPQUFPLG1CQUFtQjtJQVRoQztRQVVXLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBR3ZCLFVBQUssR0FBRyxDQUFDLENBQUM7SUFTckIsQ0FBQzs7Ozs7SUFQRyxJQUNXLE1BQU0sQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7OztZQXJCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7O0tBSVQ7O2FBRUo7OztvQkFJSSxLQUFLO3FCQUdMLEtBQUs7Ozs7SUFMTiwyQ0FBOEI7O0lBRTlCLG9DQUNpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd6aXAtaGVhZGVyLWNhcnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+e3sgaXRlbXMgfX08L2Rpdj5cbiAgICAgICAgPHppcC1pY29uIHNyYz1cImNhcnRcIj48L3ppcC1pY29uPlxuICAgICAgICA8cD57eyBwYXJzZWRBbW91bnQgfX08L3A+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXItY2FydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNhcnRDb21wb25lbnQge1xuICAgIHB1YmxpYyBwYXJzZWRBbW91bnQgPSAnMDAuMDAnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXRlbXMgPSAwO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGFtb3VudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcnNlZEFtb3VudCA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYW1vdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWRBbW91bnQ7XG4gICAgfVxufVxuIl19