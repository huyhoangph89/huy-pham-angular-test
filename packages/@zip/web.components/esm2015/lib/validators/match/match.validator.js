/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} stringControlToMatch
 * @return {?}
 */
export function matchValidator(stringControlToMatch) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3JzL21hdGNoL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sVUFBVSxjQUFjLENBQUMsb0JBQXFDO0lBQ2hFOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUFFLEVBQUU7O2NBQzFCLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLG9CQUFvQixDQUFDLEtBQUs7UUFDaEUsSUFBSSxXQUFXLEVBQUU7WUFDYixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1NBQzlDO0lBQ0wsQ0FBQyxFQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFZhbGlkYXRvcihzdHJpbmdDb250cm9sVG9NYXRjaDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZU5vdEVxdWFsID0gY29udHJvbC52YWx1ZSAhPT0gc3RyaW5nQ29udHJvbFRvTWF0Y2gudmFsdWU7XG4gICAgICAgIGlmIChhcmVOb3RFcXVhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWF0Y2g6IHsgdmFsdWU6IGNvbnRyb2wudmFsdWUgfSB9O1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdfQ==