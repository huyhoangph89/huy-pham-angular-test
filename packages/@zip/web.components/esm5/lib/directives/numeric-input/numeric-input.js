/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?} writeFunction
 * @return {?}
 */
export function numericInputIfValid(value, writeFunction) {
    if (!value.match(/\D/g)) {
        return;
    }
    writeFunction(value.replace(/\D/g, ''));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9udW1lcmljLWlucHV0L251bWVyaWMtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQUssRUFBRSxhQUFhO0lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU87S0FDVjtJQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbnVtZXJpY0lucHV0SWZWYWxpZCh2YWx1ZSwgd3JpdGVGdW5jdGlvbikge1xuICAgIGlmICghdmFsdWUubWF0Y2goL1xcRC9nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHdyaXRlRnVuY3Rpb24odmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG59XG4iXX0=