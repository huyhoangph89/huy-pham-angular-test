/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
import { numericInputIfValid } from './numeric-input';
export class NumericInputDirective {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumericInputDirective.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbnVtZXJpYy1pbnB1dC9udW1lcmljLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLdEQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUM5QixZQUFvQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO0lBQUksQ0FBQzs7OztJQUUzQyxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ3hDLG1CQUFtQixDQUFDLEtBQUs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQzlFLENBQUM7SUFDTixDQUFDOzs7WUFWSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjthQUNoQzs7OztZQUxRLFNBQVM7Ozs7Ozs7SUFPRix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbnVtZXJpY0lucHV0SWZWYWxpZCB9IGZyb20gJy4vbnVtZXJpYy1pbnB1dCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ppcE51bWVyaWNJbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIE51bWVyaWNJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+XG4gICAgICAgICAgICBudW1lcmljSW5wdXRJZlZhbGlkKHZhbHVlLCAodSkgPT4gdGhpcy5jb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh1KSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=