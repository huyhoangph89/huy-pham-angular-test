/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { constants } from '../../components.constants';
export class InputComponent {
    constructor() {
        this.label = '';
        this.placeholder = '';
        this.type = 'text';
        this.iconLeft = '';
        this.iconRight = '';
        this.formControl = new FormControl();
        this.errorMessages = {};
        this.value = '';
        this.onTouchedCallback = (/**
         * @return {?}
         */
        () => { });
        this.onChangeCallback = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get pending() {
        return this.formControl.status === 'PENDING';
    }
    /**
     * @return {?}
     */
    get invalid() {
        return this.formControl.touched && this.formControl.status === 'INVALID';
    }
    /**
     * @return {?}
     */
    get error() {
        if (!this.formControl.errors) {
            return null;
        }
        /** @type {?} */
        const error = Object.keys(this.formControl.errors)
            .map((/**
         * @param {?} validationError
         * @return {?}
         */
        validationError => this.errorMessages[validationError]))[0];
        return error || constants.messages.invalidInput;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value === this.formControl.value) {
            return;
        }
        this.formControl.setValue(value);
        this.onChangeCallback(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-input',
                template: "<label *ngIf=\"label\">{{ label }}</label>\n\n<div class=\"input-container\">\n    <span\n        class=\"zip-icon icon-left\"\n        *ngIf=\"iconLeft\"\n        [ngClass]=\"'zip-icon-' + iconLeft\">\n    </span>\n\n    <span\n        class=\"zip-icon icon-right\"\n        *ngIf=\"iconRight\"\n        [ngClass]=\"'zip-icon-' + iconRight\">\n    </span>\n\n    <input\n        [formControl]=\"formControl\"\n        (blur)=\"onTouchedCallback()\"\n        [placeholder]=\"placeholder\"\n        [type]=\"type\"\n        class=\"zip-input\"\n        [class.INVALID]=\"invalid\"\n        [class.has-icon-left]=\"iconLeft\"\n        [class.has-icon-right]=\"iconRight\"\n        value=formControl.value/>\n\n    <zip-input-notice\n        *ngIf=\"invalid\"\n        [message]=\"error\"\n        theme=\"error\">\n    </zip-input-notice>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InputComponent)),
                        multi: true
                    }
                ],
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{display:block;position:relative;margin-bottom:24px}label{margin-bottom:8px;display:block;color:#bdbdbd;font-weight:500}.input-container{position:relative}.input-container .zip-input{width:100%;box-sizing:border-box;border-radius:4px;background-color:#fff;border:1px solid #e0e0e0;height:48px;line-height:48px;padding:0 16px;transition:box-shadow .25s,border-color .25s;outline:0;font-size:16px;font-weight:400}.input-container .zip-input:active,.input-container .zip-input:focus{border:1px solid #1c70f2}.input-container .zip-input::-webkit-input-placeholder{color:#bdbdbd;font-size:16px;font-weight:400;font-family:Rubik,sans-serif}.input-container .zip-input::-moz-placeholder{color:#bdbdbd;font-size:16px;font-weight:400;font-family:Rubik,sans-serif}.input-container .zip-input:-ms-input-placeholder{color:#bdbdbd;font-size:16px;font-weight:400;font-family:Rubik,sans-serif}.input-container .zip-input::-ms-input-placeholder{color:#bdbdbd;font-size:16px;font-weight:400;font-family:Rubik,sans-serif}.input-container .zip-input::placeholder{color:#bdbdbd;font-size:16px;font-weight:400;font-family:Rubik,sans-serif}.input-container .zip-input.has-icon-left{padding-left:64px}.input-container .zip-input.has-icon-right{padding-right:64px}.input-container .zip-input.INVALID,.input-container .zip-input.error{border-color:#c32126}.input-container .zip-input.success{border-color:#208642}.input-container .zip-icon{z-index:2;position:absolute;top:0;height:48px;width:64px;display:flex;justify-content:center;align-items:center;color:#bdbdbd;font-size:22px;pointer-events:none}.input-container .zip-icon.icon-left{left:0}.input-container .zip-icon.icon-right{right:0}.input-container zip-input-notice{position:absolute;top:calc(-24px /2);right:8px}"]
            }] }
];
InputComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    iconLeft: [{ type: Input }],
    iconRight: [{ type: Input }],
    formControl: [{ type: Input }],
    errorMessages: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.label;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.iconLeft;
    /** @type {?} */
    InputComponent.prototype.iconRight;
    /** @type {?} */
    InputComponent.prototype.formControl;
    /** @type {?} */
    InputComponent.prototype.errorMessages;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWN2RCxNQUFNLE9BQU8sY0FBYztJQVozQjtRQWFhLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQW9DcEIsc0JBQWlCOzs7UUFBZSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDbEMscUJBQWdCOzs7UUFBcUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDO0lBQzNELENBQUM7Ozs7SUFwQ0csSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjs7Y0FDSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUM3QyxHQUFHOzs7O1FBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLE9BQU8sS0FBSyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDakIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDbEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQXRESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDAxQkFBcUM7Z0JBRXJDLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7O2FBQ0o7OztvQkFFSSxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFQTiwrQkFBb0I7O0lBQ3BCLHFDQUEwQjs7SUFDMUIsOEJBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIscUNBQXlDOztJQUN6Qyx1Q0FBNEI7O0lBQzVCLCtCQUFvQjs7SUFvQ3BCLDJDQUEwQzs7Ozs7SUFDMUMsMENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnemlwLWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICAgIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gICAgQElucHV0KCkgaWNvbkxlZnQgPSAnJztcbiAgICBASW5wdXQoKSBpY29uUmlnaHQgPSAnJztcbiAgICBASW5wdXQoKSBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZXMgPSB7fTtcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnO1xuICAgIH1cblxuICAgIGdldCBpbnZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC50b3VjaGVkICYmIHRoaXMuZm9ybUNvbnRyb2wuc3RhdHVzID09PSAnSU5WQUxJRCc7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybUNvbnRyb2wuZXJyb3JzKVxuICAgICAgICAgICAgLm1hcCh2YWxpZGF0aW9uRXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2VzW3ZhbGlkYXRpb25FcnJvcl0pWzBdO1xuXG4gICAgICAgIHJldHVybiBlcnJvciB8fCBjb25zdGFudHMubWVzc2FnZXMuaW52YWxpZElucHV0O1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xufVxuIl19