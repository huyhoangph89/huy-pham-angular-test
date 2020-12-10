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
export class FormatContentPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvbnRlbnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZm9ybWF0Q29udGVudC9mb3JtYXQtY29udGVudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7OztBQWM3QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFDMUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksb0NBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxLQUFLLENBQUMsd0NBQXdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9FO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFwQkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhhcyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzdHJpbmcsIG51bWJlciB9IGZyb20gJ2NoZWNrLXR5cGVzJztcblxuLypcbiAgICAtIFRlbXBsYXRlIFVzYWdlIC1cblxuICAgIGNvbnN0IHN0ciA9ICdMb3JlbSB7e3ZhbHVlfX0nXG4gICAgY29uc3QgYXJncyA9IHsgdmFsdWU6ICdpcHN1bScgfVxuXG4gICAgPGRpdj5cbiAgICAgICAge3sgc3RyIHwgZm9ybWF0Q29udGVudDogYXJncyB9fVxuICAgIDwvZGl2PlxuKi9cblxuQFBpcGUoeyBuYW1lOiAnZm9ybWF0Q29udGVudCcgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRDb250ZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShzdHIsIGFyZ3MpIHtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYXJncykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIGFyZ3VtZW50cyBwcm92aWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC97eyhcXHcrKX19L2csIChtYXRjaCwgd29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFoYXMoYXJncywgd29yZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgJHt3b3JkfSB3YXMgbm90IGZvdW5kIGluIHRoZSBkaWN0aW9uYXJ5ICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0cmluZyhhcmdzW3dvcmRdKSAmJiAhbnVtYmVyKGFyZ3Nbd29yZF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEFyZ3VtZW50cyBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bWJlciAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Nbd29yZF07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==