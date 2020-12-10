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
    function (control) {
        if (includes(invalidValues, control.value)) {
            return { notIn: { value: control.value } };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWluLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9ub3QtaW4vbm90LWluLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFFbEMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxhQUFvQjtJQUMvQzs7OztJQUFPLFVBQUMsT0FBd0I7UUFDNUIsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1NBQzlDO0lBQ0wsQ0FBQyxFQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpbmNsdWRlcyB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RJblZhbGlkYXRvcihpbnZhbGlkVmFsdWVzOiBhbnlbXSk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgICBpZiAoaW5jbHVkZXMoaW52YWxpZFZhbHVlcywgY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEluOiB7IHZhbHVlOiBjb250cm9sLnZhbHVlIH0gfTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=