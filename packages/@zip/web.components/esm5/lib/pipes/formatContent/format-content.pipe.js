/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { has } from 'lodash';
import { string, number } from 'check-types';
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
export { FormatContentPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvbnRlbnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZm9ybWF0Q29udGVudC9mb3JtYXQtY29udGVudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7OztBQWE3QztJQUFBO0lBcUJBLENBQUM7Ozs7OztJQW5CRyxxQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQUcsRUFBRSxJQUFJO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZOzs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLElBQUk7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sS0FBSyxDQUFJLElBQUkseUNBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQzthQUNsRjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzVDLE1BQU0sS0FBSyxDQUFDLDBDQUF3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7YUFDL0U7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXBCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztJQXFCL0Isd0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBoYXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc3RyaW5nLCBudW1iZXIgfSBmcm9tICdjaGVjay10eXBlcyc7XG5cbi8qXG4gICAgLSBUZW1wbGF0ZSBVc2FnZSAtXG5cbiAgICBjb25zdCBzdHIgPSAnTG9yZW0ge3t2YWx1ZX19J1xuICAgIGNvbnN0IGFyZ3MgPSB7IHZhbHVlOiAnaXBzdW0nIH1cblxuICAgIDxkaXY+XG4gICAgICAgIHt7IHN0ciB8IGZvcm1hdENvbnRlbnQ6IGFyZ3MgfX1cbiAgICA8L2Rpdj5cbiovXG5cbkBQaXBlKHsgbmFtZTogJ2Zvcm1hdENvbnRlbnQnIH0pXG5leHBvcnQgY2xhc3MgRm9ybWF0Q29udGVudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oc3RyLCBhcmdzKSB7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyBhcmd1bWVudHMgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgve3soXFx3Kyl9fS9nLCAobWF0Y2gsIHdvcmQpID0+IHtcbiAgICAgICAgICAgIGlmICghaGFzKGFyZ3MsIHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7d29yZH0gd2FzIG5vdCBmb3VuZCBpbiB0aGUgZGljdGlvbmFyeSAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdHJpbmcoYXJnc1t3b3JkXSkgJiYgIW51bWJlcihhcmdzW3dvcmRdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBBcmd1bWVudHMgbXVzdCBiZSBhIHN0cmluZyBvciBudW1iZXIgJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcmdzW3dvcmRdO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=