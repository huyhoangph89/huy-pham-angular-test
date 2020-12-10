import { RouterModule } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { string, number } from 'check-types';
import { NgControl, NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import { has, includes } from 'lodash';
import { Directive, HostListener, Input, Pipe, Component, HostBinding, forwardRef, NgModule, Injectable, Injector, ComponentFactoryResolver, ApplicationRef, defineInjectable, inject, INJECTOR } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HrefDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?} writeFunction
 * @return {?}
 */
function numericInputIfValid(value, writeFunction) {
    if (!value.match(/\D/g)) {
        return;
    }
    writeFunction(value.replace(/\D/g, ''));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericInputDirective {
    /**
     * @param {?} control
     */
    constructor(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.control.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => numericInputIfValid(value, (/**
         * @param {?} u
         * @return {?}
         */
        (u) => this.control.valueAccessor.writeValue(u)))));
    }
}
NumericInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[zipNumericInput]'
            },] }
];
/** @nocollapse */
NumericInputDirective.ctorParameters = () => [
    { type: NgControl }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterBackDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
    - Template Usage -

    const str = 'Lorem {{value}}'
    const args = { value: 'ipsum' }

    <div>
        {{ str | formatContent: args }}
    </div>
*/
class FormatContentPipe {
    /**
     * @param {?} str
     * @param {?} args
     * @return {?}
     */
    transform(str, args) {
        if (!str) {
            return '';
        }
        if (!args) {
            throw Error('No arguments provided');
        }
        return str.replace(/{{(\w+)}}/g, (/**
         * @param {?} match
         * @param {?} word
         * @return {?}
         */
        (match, word) => {
            if (!has(args, word)) {
                throw Error(`${word} was not found in the dictionary ${JSON.stringify(args)}`);
            }
            if (!string(args[word]) && !number(args[word])) {
                throw Error(`Arguments must be a string or number ${JSON.stringify(args)}`);
            }
            return args[word];
        }));
    }
}
FormatContentPipe.decorators = [
    { type: Pipe, args: [{ name: 'formatContent' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderCartComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-header',
                template: `
    <div class="left">
        <ng-content select="zip-header-left"></ng-content>
    </div>
    <div class="center">
        <ng-content select="zip-header-center"></ng-content>
    </div>
    <div class="left">
        <ng-content select="zip-header-right"></ng-content>
    </div>
  `,
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{height:60px;background-color:#fff;border-bottom:1px solid #e0e0e0;position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.center{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:flex;justify-content:center;align-items:center}.left,.right{position:relative;z-index:2;height:100%}"]
            }] }
];
class HeaderLeftComponent {
}
HeaderLeftComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-header-left',
                template: '<ng-content></ng-content>',
                styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
            }] }
];
class HeaderRightComponent {
}
HeaderRightComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-header-right',
                template: '<ng-content></ng-content>',
                styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
            }] }
];
class HeaderCenterComponent {
}
HeaderCenterComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-header-center',
                template: '<ng-content></ng-content>',
                styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const constants = {
    cdn: 'https://zip.co/assets/',
    toasts: {
        defaultDurationMilliseconds: 5000
    },
    messages: {
        invalidInput: 'Invalid Input'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const noticeAnimation = [
    trigger('in-out', [
        transition(':enter', [
            animate('250ms ease-in', keyframes([
                style({
                    opacity: 0,
                    transform: 'translate3d(0, 5px, 0)'
                }),
                style({
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)'
                })
            ]))
        ]),
        transition(':leave', [
            animate('250ms ease-in', keyframes([
                style({
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)'
                }),
                style({
                    opacity: 0,
                    transform: 'translate3d(0, 5px, 0)'
                })
            ]))
        ]),
    ])
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputNoticeComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    set theme(value) {
        this.color = value;
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LogoType = {
    zip: 0,
    zipmoney: 1,
    zippay: 2,
};
LogoType[LogoType.zip] = 'zip';
LogoType[LogoType.zipmoney] = 'zipmoney';
LogoType[LogoType.zippay] = 'zippay';
class LogoComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelComponent {
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-panel',
                template: "<div class=\"panel\">\n    <ng-content></ng-content>\n</div>\n",
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1}.panel{width:100%;background-color:#fff;margin:60px 0 0;padding:24px 16px}@media (min-width:769px){.panel{max-width:600px;margin:94px auto 34px;border-radius:4px;border:1px solid #e0e0e0;padding:48px 76px}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelHeadingComponent {
}
PanelHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-panel-heading',
                template: "<ng-content select=\"h1\"></ng-content>\n<ng-content select=\"h2\"></ng-content>\n<ng-content select=\"a\"></ng-content>\n",
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{text-align:center;margin-bottom:26px;display:flex;flex-direction:column;justify-content:center;align-items:center}:host ::ng-deep :last-child{padding-bottom:0;margin-bottom:0}:host ::ng-deep h1{display:block;font-size:22px;color:#424242;margin-bottom:16px;text-align:center;font-weight:500}@media (min-width:769px){:host ::ng-deep h1{font-size:26px}}:host ::ng-deep h2{display:block;font-size:16px;font-weight:400;color:#757575;margin-bottom:16px;line-height:1.75;text-align:center}:host ::ng-deep a{color:#3e85f4;text-decoration:none;display:flex;justify-content:center}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'zip-loading-spinner',
                template: "<div class=\"zip-spinner\">\n    <div id=\"spin1\" class=\"spin\"></div>\n    <div id=\"spin2\" class=\"spin\"></div>\n    <div id=\"spin3\" class=\"spin\"></div>\n    <div id=\"spin4\" class=\"spin\"></div>\n</div>\n",
                styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}.zip-spinner{width:70px;height:70px;margin:24px auto;position:relative}.spin{width:70px;height:70px;position:absolute}.spin:before{content:'';height:28px;width:28px;border-radius:50%;position:absolute}#spin1:before{background-color:#f8991c}#spin2:before{background-color:#1b1e63}#spin3:before{background-color:#00aeb8}#spin4:before{background-color:#f15c3e}#spin1{transform:rotate(360deg);-webkit-animation:1s linear infinite timer1;animation:1s linear infinite timer1}#spin2{transform:rotate(270deg);-webkit-animation:1s linear -.25s infinite timer1;animation:1s linear -.25s infinite timer1}#spin3{transform:rotate(180deg);-webkit-animation:1s linear -.5s infinite timer1;animation:1s linear -.5s infinite timer1}#spin4{transform:rotate(90deg);-webkit-animation:1s linear -.75s infinite timer1;animation:1s linear -.75s infinite timer1}@-webkit-keyframes timer1{0%{transform:rotate(360deg)}25%{transform:rotate(270deg)}50%{transform:rotate(180deg)}75%{transform:rotate(90deg)}100%{transform:rotate(0)}}@keyframes timer1{0%{transform:rotate(360deg)}25%{transform:rotate(270deg)}50%{transform:rotate(180deg)}75%{transform:rotate(90deg)}100%{transform:rotate(0)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZipWebComponentsModule {
}
ZipWebComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    HrefDirective,
                    NumericInputDirective,
                    RouterBackDirective,
                    FormatContentPipe,
                    HeaderCartComponent,
                    HeaderCenterComponent,
                    HeaderComponent,
                    HeaderLeftComponent,
                    HeaderRightComponent,
                    IconComponent,
                    InputComponent,
                    InputNoticeComponent,
                    LogoComponent,
                    PanelComponent,
                    PanelHeadingComponent,
                    LoadingSpinnerComponent
                ],
                exports: [
                    HrefDirective,
                    NumericInputDirective,
                    RouterBackDirective,
                    FormatContentPipe,
                    HeaderCartComponent,
                    HeaderCenterComponent,
                    HeaderComponent,
                    HeaderLeftComponent,
                    HeaderRightComponent,
                    IconComponent,
                    InputComponent,
                    InputNoticeComponent,
                    LogoComponent,
                    PanelComponent,
                    PanelHeadingComponent,
                    LoadingSpinnerComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} stringControlToMatch
 * @return {?}
 */
function matchValidator(stringControlToMatch) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const areNotEqual = control.value !== stringControlToMatch.value;
        if (areNotEqual) {
            return { match: { value: control.value } };
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} invalidValues
 * @return {?}
 */
function notInValidator(invalidValues) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        if (includes(invalidValues, control.value)) {
            return { notIn: { value: control.value } };
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomValidators {
}
CustomValidators.match = matchValidator;
CustomValidators.notIn = notInValidator;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ComponentInstance {
    /**
     * @param {?} componentRef
     */
    constructor(componentRef) {
        this.componentRef = componentRef;
        this.subscriptions = new Subscription();
        this.destroyActions = [];
    }
    /**
     * @return {?}
     */
    get element() {
        return (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView)))
            .rootNodes[0]));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    setProp(key, value) {
        if (!key || !value) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).componentRef.instance[key] = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    onEvent(key, callback) {
        if (!key || !callback) {
            return (/** @type {?} */ (this));
        }
        if (!(/** @type {?} */ (this)).componentRef.instance[key]) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).subscriptions.add((/** @type {?} */ (this)).componentRef.instance[key].subscribe(callback));
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    onDestroy(callback) {
        (/** @type {?} */ (this)).destroyActions.push(callback);
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subscriptions.unsubscribe();
        this.componentRef.destroy();
        this.destroyActions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        action => action()));
        this.destroyActions = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    instantiate(component) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const instance = new ComponentInstance(componentRef);
        instance.onDestroy((/**
         * @return {?}
         */
        () => this.appRef.detachView(componentRef.hostView)));
        return instance;
    }
}
ComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ ComponentService.ngInjectableDef = defineInjectable({ factory: function ComponentService_Factory() { return new ComponentService(inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR)); }, token: ComponentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ZipWebComponentsModule, CustomValidators, LogoType, LogoComponent, ComponentService, ComponentInstance, HeaderCartComponent as ɵe, HeaderCenterComponent as ɵi, HeaderComponent as ɵf, HeaderLeftComponent as ɵg, HeaderRightComponent as ɵh, IconComponent as ɵj, noticeAnimation as ɵm, InputNoticeComponent as ɵl, InputComponent as ɵk, LoadingSpinnerComponent as ɵp, PanelHeadingComponent as ɵo, PanelComponent as ɵn, HrefDirective as ɵa, NumericInputDirective as ɵb, RouterBackDirective as ɵc, FormatContentPipe as ɵd };

//# sourceMappingURL=zip-web.components.js.map