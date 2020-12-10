/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { includes } from 'lodash';
/**
 * @param {?} invalidValues
 * @return {?}
 */
export function notInValidator(invalidValues) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWluLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9ub3QtaW4vbm90LWluLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFFbEMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxhQUFvQjtJQUMvQzs7OztJQUFPLENBQUMsT0FBd0IsRUFBRSxFQUFFO1FBQ2hDLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztTQUM5QztJQUNMLENBQUMsRUFBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaW5jbHVkZXMgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZnVuY3Rpb24gbm90SW5WYWxpZGF0b3IoaW52YWxpZFZhbHVlczogYW55W10pOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgICAgaWYgKGluY2x1ZGVzKGludmFsaWRWYWx1ZXMsIGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RJbjogeyB2YWx1ZTogY29udHJvbC52YWx1ZSB9IH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl19