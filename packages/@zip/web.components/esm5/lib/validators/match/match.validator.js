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
    function (control) {
        /** @type {?} */
        var areNotEqual = control.value !== stringControlToMatch.value;
        if (areNotEqual) {
            return { match: { value: control.value } };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3JzL21hdGNoL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sVUFBVSxjQUFjLENBQUMsb0JBQXFDO0lBQ2hFOzs7O0lBQU8sVUFBQyxPQUF3Qjs7WUFDdEIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEtBQUssb0JBQW9CLENBQUMsS0FBSztRQUNoRSxJQUFJLFdBQVcsRUFBRTtZQUNiLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7U0FDOUM7SUFDTCxDQUFDLEVBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVmFsaWRhdG9yKHN0cmluZ0NvbnRyb2xUb01hdGNoOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgICAgY29uc3QgYXJlTm90RXF1YWwgPSBjb250cm9sLnZhbHVlICE9PSBzdHJpbmdDb250cm9sVG9NYXRjaC52YWx1ZTtcbiAgICAgICAgaWYgKGFyZU5vdEVxdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtYXRjaDogeyB2YWx1ZTogY29udHJvbC52YWx1ZSB9IH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl19