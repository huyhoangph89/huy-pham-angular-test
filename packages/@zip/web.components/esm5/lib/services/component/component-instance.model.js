/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from 'rxjs';
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentInstance = /** @class */ (function () {
    function ComponentInstance(componentRef) {
        this.componentRef = componentRef;
        this.subscriptions = new Subscription();
        this.destroyActions = [];
    }
    Object.defineProperty(ComponentInstance.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView)))
                .rootNodes[0]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    ComponentInstance.prototype.setProp = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    function (key, value) {
        if (!key || !value) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).componentRef.instance[key] = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    ComponentInstance.prototype.onEvent = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    function (key, callback) {
        if (!key || !callback) {
            return (/** @type {?} */ (this));
        }
        if (!(/** @type {?} */ (this)).componentRef.instance[key]) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).subscriptions.add((/** @type {?} */ (this)).componentRef.instance[key].subscribe(callback));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    ComponentInstance.prototype.onDestroy = /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    function (callback) {
        (/** @type {?} */ (this)).destroyActions.push(callback);
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    ComponentInstance.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.componentRef.destroy();
        this.destroyActions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action(); }));
        this.destroyActions = [];
    };
    return ComponentInstance;
}());
/**
 * @template T
 */
export { ComponentInstance };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentInstance.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ComponentInstance.prototype.destroyActions;
    /**
     * @type {?}
     * @private
     */
    ComponentInstance.prototype.componentRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluc3RhbmNlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wb25lbnQvY29tcG9uZW50LWluc3RhbmNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3BDOzs7O0lBU0ksMkJBQ1ksWUFBNkI7UUFBN0IsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBVGpDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQVN6QixDQUFDO0lBUEosc0JBQUksc0NBQU87Ozs7UUFBWDtZQUNJLE9BQU8sbUJBQUEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQztpQkFDdEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7Ozs7Ozs7O0lBTUQsbUNBQU87Ozs7Ozs7SUFBUCxVQUFRLEdBQVcsRUFBRSxLQUFVO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNmO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQUVELG1DQUFPOzs7Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsUUFBK0I7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2Y7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNsQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FDdEQsQ0FBQztRQUNGLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVELHFDQUFTOzs7Ozs7SUFBVCxVQUFVLFFBQW9CO1FBQzFCLG1CQUFBLElBQUksRUFBQSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxFQUFFLEVBQVIsQ0FBUSxFQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQzs7Ozs7Ozs7OztJQTVDRywwQ0FBMkM7Ozs7O0lBQzNDLDJDQUE0Qjs7Ozs7SUFReEIseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SW5zdGFuY2U8VD4ge1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBwcml2YXRlIGRlc3Ryb3lBY3Rpb25zID0gW107XG5cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgICAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4sXG4gICAgKSB7fVxuXG4gICAgc2V0UHJvcChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25FdmVudChrZXk6IHN0cmluZywgY2FsbGJhY2s6ICguLi5hcmdzOiBhbnkpID0+IGFueSkge1xuICAgICAgICBpZiAoIWtleSB8fCAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0uc3Vic2NyaWJlKGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95QWN0aW9ucy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5kZXN0cm95QWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiBhY3Rpb24oKSk7XG4gICAgICAgIHRoaXMuZGVzdHJveUFjdGlvbnMgPSBbXTtcbiAgICB9XG59XG4iXX0=