/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
/** @type {?} */
export var noticeAnimation = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbm90aWNlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B6aXAvd2ViLmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1ub3RpY2UvaW5wdXQtbm90aWNlLmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE0QixPQUFPLEVBQVMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXRILE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDM0IsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxDQUFDLGVBQWUsRUFDbkIsU0FBUyxDQUFDO2dCQUNOLEtBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsd0JBQXdCO2lCQUN0QyxDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsc0JBQXNCO2lCQUNwQyxDQUFDO2FBQ0wsQ0FBQyxDQUFDO1NBQ1YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxDQUFDLGVBQWUsRUFDbkIsU0FBUyxDQUFDO2dCQUNOLEtBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsc0JBQXNCO2lCQUNwQyxDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsd0JBQXdCO2lCQUN0QyxDQUFDO2FBQ0wsQ0FBQyxDQUFDO1NBQ1YsQ0FBQztLQUNMLENBQ0E7Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IG5vdGljZUFuaW1hdGlvbiA9IFtcbiAgICB0cmlnZ2VyKCdpbi1vdXQnLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLFxuICAgICAgICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCA1cHgsIDApJ1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsXG4gICAgICAgICAgICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDVweCwgMCknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgIF0pLFxuICAgIF1cbiAgICApXTtcbiJdfQ==