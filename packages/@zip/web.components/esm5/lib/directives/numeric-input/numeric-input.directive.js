/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
import { numericInputIfValid } from './numeric-input';
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
export { NumericInputDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumericInputDirective.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AemlwL3dlYi5jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbnVtZXJpYy1pbnB1dC9udW1lcmljLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQ7SUFJSSwrQkFBb0IsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztJQUFJLENBQUM7Ozs7SUFFM0Msd0NBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3JDLE9BQUEsbUJBQW1CLENBQUMsS0FBSzs7OztZQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDO1FBQTNFLENBQTJFLEVBQzlFLENBQUM7SUFDTixDQUFDOztnQkFWSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtpQkFDaEM7Ozs7Z0JBTFEsU0FBUzs7SUFjbEIsNEJBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSxxQkFBcUI7Ozs7OztJQUNsQix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbnVtZXJpY0lucHV0SWZWYWxpZCB9IGZyb20gJy4vbnVtZXJpYy1pbnB1dCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ppcE51bWVyaWNJbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIE51bWVyaWNJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+XG4gICAgICAgICAgICBudW1lcmljSW5wdXRJZlZhbGlkKHZhbHVlLCAodSkgPT4gdGhpcy5jb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh1KSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=