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
var NumericInputDirective = /** @class */ (function () {
    function NumericInputDirective(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    NumericInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.control.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return numericInputIfValid(value, (/**
             * @param {?} u
             * @return {?}
             */
            function (u) { return _this.control.valueAccessor.writeValue(u); }));
        }));
    };
    NumericInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[zipNumericInput]'
                },] }
    ];
    /** @nocollapse */
    NumericInputDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    return NumericInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var FormatContentPipe = /** @class */ (function () {
    function FormatContentPipe() {
    }
    /**
     * @param {?} str
     * @param {?} args
     * @return {?}
     */
    FormatContentPipe.prototype.transform = /**
     * @param {?} str
     * @param {?} args
     * @return {?}
     */
    function (str, args) {
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
        function (match, word) {
            if (!has(args, word)) {
                throw Error(word + " was not found in the dictionary " + JSON.stringify(args));
            }
            if (!string(args[word]) && !number(args[word])) {
                throw Error("Arguments must be a string or number " + JSON.stringify(args));
            }
            return args[word];
        }));
    };
    FormatContentPipe.decorators = [
        { type: Pipe, args: [{ name: 'formatContent' },] }
    ];
    return FormatContentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderCartComponent = /** @class */ (function () {
    function HeaderCartComponent() {
        this.parsedAmount = '00.00';
        this.items = 0;
    }
    Object.defineProperty(HeaderCartComponent.prototype, "amount", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parsedAmount;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.parsedAmount = parseFloat(value).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    HeaderCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-header-cart',
                    template: "\n        <div>{{ items }}</div>\n        <zip-icon src=\"cart\"></zip-icon>\n        <p>{{ parsedAmount }}</p>\n    ",
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{display:block;text-align:center;cursor:default}:host ::ng-deep>*{position:relative;z-index:1;color:#1b1e63;margin:0}div{background-color:#f15c3e;color:#fff;height:14px;width:14px;font-weight:600;border-radius:50%;display:flex;justify-content:center;align-items:center;margin:0 0 -9px auto;z-index:2;font-size:10px}zip-icon{font-size:24px}p{line-height:10px;font-size:10px;letter-spacing:.5px}"]
                }] }
    ];
    HeaderCartComponent.propDecorators = {
        items: [{ type: Input }],
        amount: [{ type: Input }]
    };
    return HeaderCartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-header',
                    template: "\n    <div class=\"left\">\n        <ng-content select=\"zip-header-left\"></ng-content>\n    </div>\n    <div class=\"center\">\n        <ng-content select=\"zip-header-center\"></ng-content>\n    </div>\n    <div class=\"left\">\n        <ng-content select=\"zip-header-right\"></ng-content>\n    </div>\n  ",
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{height:60px;background-color:#fff;border-bottom:1px solid #e0e0e0;position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.center{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:flex;justify-content:center;align-items:center}.left,.right{position:relative;z-index:2;height:100%}"]
                }] }
    ];
    return HeaderComponent;
}());
var HeaderLeftComponent = /** @class */ (function () {
    function HeaderLeftComponent() {
    }
    HeaderLeftComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-header-left',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
                }] }
    ];
    return HeaderLeftComponent;
}());
var HeaderRightComponent = /** @class */ (function () {
    function HeaderRightComponent() {
    }
    HeaderRightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-header-right',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
                }] }
    ];
    return HeaderRightComponent;
}());
var HeaderCenterComponent = /** @class */ (function () {
    function HeaderCenterComponent() {
    }
    HeaderCenterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-header-center',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;justify-content:center;align-items:center;height:100%}"]
                }] }
    ];
    return HeaderCenterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.icon = '';
    }
    Object.defineProperty(IconComponent.prototype, "src", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.icon = "zip-icon zip-icon-" + value;
        },
        enumerable: true,
        configurable: true
    });
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
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var constants = {
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
var InputComponent = /** @class */ (function () {
    function InputComponent() {
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
        function () { });
        this.onChangeCallback = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(InputComponent.prototype, "pending", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formControl.status === 'PENDING';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "invalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formControl.touched && this.formControl.status === 'INVALID';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.formControl.errors) {
                return null;
            }
            /** @type {?} */
            var error = Object.keys(this.formControl.errors)
                .map((/**
             * @param {?} validationError
             * @return {?}
             */
            function (validationError) { return _this.errorMessages[validationError]; }))[0];
            return error || constants.messages.invalidInput;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    InputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === this.formControl.value) {
            return;
        }
        this.formControl.setValue(value);
        this.onChangeCallback(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
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
                            function () { return InputComponent; })),
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
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noticeAnimation = [
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var LogoType = {
    zip: 0,
    zipmoney: 1,
    zippay: 2,
};
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-panel',
                    template: "<div class=\"panel\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1}.panel{width:100%;background-color:#fff;margin:60px 0 0;padding:24px 16px}@media (min-width:769px){.panel{max-width:600px;margin:94px auto 34px;border-radius:4px;border:1px solid #e0e0e0;padding:48px 76px}}"]
                }] }
    ];
    return PanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelHeadingComponent = /** @class */ (function () {
    function PanelHeadingComponent() {
    }
    PanelHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-panel-heading',
                    template: "<ng-content select=\"h1\"></ng-content>\n<ng-content select=\"h2\"></ng-content>\n<ng-content select=\"a\"></ng-content>\n",
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}:host{text-align:center;margin-bottom:26px;display:flex;flex-direction:column;justify-content:center;align-items:center}:host ::ng-deep :last-child{padding-bottom:0;margin-bottom:0}:host ::ng-deep h1{display:block;font-size:22px;color:#424242;margin-bottom:16px;text-align:center;font-weight:500}@media (min-width:769px){:host ::ng-deep h1{font-size:26px}}:host ::ng-deep h2{display:block;font-size:16px;font-weight:400;color:#757575;margin-bottom:16px;line-height:1.75;text-align:center}:host ::ng-deep a{color:#3e85f4;text-decoration:none;display:flex;justify-content:center}"]
                }] }
    ];
    return PanelHeadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'zip-loading-spinner',
                    template: "<div class=\"zip-spinner\">\n    <div id=\"spin1\" class=\"spin\"></div>\n    <div id=\"spin2\" class=\"spin\"></div>\n    <div id=\"spin3\" class=\"spin\"></div>\n    <div id=\"spin4\" class=\"spin\"></div>\n</div>\n",
                    styles: ["*{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-Mac-osx-font-smoothing:grayscale;box-sizing:border-box;list-style-type:none;text-decoration:none;color:inherit;font-family:Rubik,sans-serif}:active,:focus{outline:0}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:28px;line-height:32px;margin-bottom:28px}@media (min-width:769px){h1{font-size:30px;line-height:34px}}h2{font-size:26px;line-height:30px;margin-bottom:24px}@media (min-width:769px){h2{font-size:28px;line-height:32px}}h3{font-size:24px;line-height:28px;margin-bottom:20px}@media (min-width:769px){h3{font-size:26px;line-height:30px}}h4{font-size:22px;line-height:26px;margin-bottom:16px}@media (min-width:769px){h4{font-size:24px;line-height:28px}}h5{font-size:20px;line-height:22px;margin-bottom:12px}@media (min-width:769px){h5{font-size:22px;line-height:26px}}h6{font-size:18px;line-height:20px;margin-bottom:8px}@media (min-width:769px){h6{font-size:20px;line-height:24px}}a{color:#3e85f4;text-decoration:underline}a,label,p{font-size:14px;line-height:18px;font-weight:400;margin-bottom:4px}@media (min-width:769px){a,label,p{font-size:16px;line-height:22px;margin-bottom:8px}}label{display:block}em{font-size:inherit;font-weight:600}code{display:block;font-size:14px;font-family:Inconsolata,monospace;padding:10px;background:#eee;border-radius:4px;white-space:pre-wrap}.margin-bottom-level-0{margin-bottom:0!important}.margin-bottom-level-1{margin-bottom:4px!important}.margin-bottom-level-2{margin-bottom:8px!important}.margin-bottom-level-3{margin-bottom:12px!important}.margin-bottom-level-4{margin-bottom:16px!important}.margin-bottom-level-5{margin-bottom:20px!important}.margin-bottom-level-6{margin-bottom:24px!important}.margin-bottom-level-7{margin-bottom:28px!important}.margin-bottom-level-8{margin-bottom:32px!important}.margin-bottom-level-9{margin-bottom:36px!important}.margin-bottom-level-10{margin-bottom:40px!important}.zip-spinner{width:70px;height:70px;margin:24px auto;position:relative}.spin{width:70px;height:70px;position:absolute}.spin:before{content:'';height:28px;width:28px;border-radius:50%;position:absolute}#spin1:before{background-color:#f8991c}#spin2:before{background-color:#1b1e63}#spin3:before{background-color:#00aeb8}#spin4:before{background-color:#f15c3e}#spin1{transform:rotate(360deg);-webkit-animation:1s linear infinite timer1;animation:1s linear infinite timer1}#spin2{transform:rotate(270deg);-webkit-animation:1s linear -.25s infinite timer1;animation:1s linear -.25s infinite timer1}#spin3{transform:rotate(180deg);-webkit-animation:1s linear -.5s infinite timer1;animation:1s linear -.5s infinite timer1}#spin4{transform:rotate(90deg);-webkit-animation:1s linear -.75s infinite timer1;animation:1s linear -.75s infinite timer1}@-webkit-keyframes timer1{0%{transform:rotate(360deg)}25%{transform:rotate(270deg)}50%{transform:rotate(180deg)}75%{transform:rotate(90deg)}100%{transform:rotate(0)}}@keyframes timer1{0%{transform:rotate(360deg)}25%{transform:rotate(270deg)}50%{transform:rotate(180deg)}75%{transform:rotate(90deg)}100%{transform:rotate(0)}}"]
                }] }
    ];
    return LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZipWebComponentsModule = /** @class */ (function () {
    function ZipWebComponentsModule() {
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
    return ZipWebComponentsModule;
}());

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
    function (control) {
        /** @type {?} */
        var areNotEqual = control.value !== stringControlToMatch.value;
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
    function (control) {
        if (includes(invalidValues, control.value)) {
            return { notIn: { value: control.value } };
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.match = matchValidator;
    CustomValidators.notIn = notInValidator;
    return CustomValidators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ComponentInstance = /** @class */ (function () {
    function ComponentInstance(componentRef) {
        this.componentRef = componentRef;
        this.subscriptions = new Subscription();
        this.destroyActions = [];
    }
    Object.defineProperty(ComponentInstance.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView)))
                .rootNodes[0]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    ComponentInstance.prototype.setProp = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    function (key, value) {
        if (!key || !value) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).componentRef.instance[key] = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    ComponentInstance.prototype.onEvent = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    function (key, callback) {
        if (!key || !callback) {
            return (/** @type {?} */ (this));
        }
        if (!(/** @type {?} */ (this)).componentRef.instance[key]) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).subscriptions.add((/** @type {?} */ (this)).componentRef.instance[key].subscribe(callback));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    ComponentInstance.prototype.onDestroy = /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    function (callback) {
        (/** @type {?} */ (this)).destroyActions.push(callback);
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    ComponentInstance.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.componentRef.destroy();
        this.destroyActions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action(); }));
        this.destroyActions = [];
    };
    return ComponentInstance;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentService = /** @class */ (function () {
    function ComponentService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ComponentService.prototype.instantiate = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var instance = new ComponentInstance(componentRef);
        instance.onDestroy((/**
         * @return {?}
         */
        function () { return _this.appRef.detachView(componentRef.hostView); }));
        return instance;
    };
    ComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ ComponentService.ngInjectableDef = defineInjectable({ factory: function ComponentService_Factory() { return new ComponentService(inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR)); }, token: ComponentService, providedIn: "root" });
    return ComponentService;
}());

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