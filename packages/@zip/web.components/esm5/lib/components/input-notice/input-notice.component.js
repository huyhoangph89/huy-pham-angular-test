/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { noticeAnimation } from './input-notice.animation';
var InputNoticeComponent = /** @class */ (function () {
    function InputNoticeComponent() {
    }
    Object.defineProperty(InputNoticeComponent.prototype, "theme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.color = value;
        },
        enumerable: true,
        configurable: true
    });
    InputNoticeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-input-notice',
                    template: '{{ message }}',
                    animations: noticeAnimation,
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{display:inline-block;line-height:24px;padding:0 8px;border-radius:12px;font-size:12px;letter-spacing:.6px;font-weight:500;box-shadow:0 8px 16px 0 rgba(51,51,51,.1);color:#fff;background-color:#e0e0e0}:host.primary{background-color:#1c70f2}:host.error{background-color:#c32126}:host.warning{background-color:#f8991c}:host.success{background-color:#208642}"]
                }] }
    ];
    InputNoticeComponent.propDecorators = {
        color: [{ type: HostBinding, args: ['class',] }],
        message: [{ type: HostBinding, args: ['@in-out',] }, { type: Input }],
        theme: [{ type: Input }]
    };
    return InputNoticeComponent;
}());
export { InputNoticeComponent };
if (false) {
    /** @type {?} */
    InputNoticeComponent.prototype.color;
    /** @type {?} */
    InputNoticeComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbm90aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1ub3RpY2UvaW5wdXQtbm90aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0Q7SUFBQTtJQWNBLENBQUM7SUFIRyxzQkFBYSx1Q0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBSztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Z0JBYkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxlQUFlO29CQUV6QixVQUFVLEVBQUUsZUFBZTs7aUJBQzlCOzs7d0JBRUksV0FBVyxTQUFDLE9BQU87MEJBQ25CLFdBQVcsU0FBQyxTQUFTLGNBRXJCLEtBQUs7d0JBQ0wsS0FBSzs7SUFHViwyQkFBQztDQUFBLEFBZEQsSUFjQztTQVJZLG9CQUFvQjs7O0lBQzdCLHFDQUE0Qjs7SUFDNUIsdUNBRWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBub3RpY2VBbmltYXRpb24gfSBmcm9tICcuL2lucHV0LW5vdGljZS5hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ppcC1pbnB1dC1ub3RpY2UnLFxuICAgIHRlbXBsYXRlOiAne3sgbWVzc2FnZSB9fScsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtbm90aWNlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogbm90aWNlQW5pbWF0aW9uXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Tm90aWNlQ29tcG9uZW50IHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY29sb3I7XG4gICAgQEhvc3RCaW5kaW5nKCdAaW4tb3V0JylcblxuICAgIEBJbnB1dCgpIG1lc3NhZ2U7XG4gICAgQElucHV0KCkgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSB2YWx1ZTtcbiAgICB9XG59XG4iXX0=