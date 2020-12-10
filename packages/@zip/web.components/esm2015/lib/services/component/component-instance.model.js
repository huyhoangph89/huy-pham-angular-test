/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from 'rxjs';
/**
 * @template T
 */
export class ComponentInstance {
    /**
     * @param {?} componentRef
     */
    constructor(componentRef) {
        this.componentRef = componentRef;
        this.subscriptions = new Subscription();
        this.destroyActions = [];
    }
    /**
     * @return {?}
     */
    get element() {
        return (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView)))
            .rootNodes[0]));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    setProp(key, value) {
        if (!key || !value) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).componentRef.instance[key] = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} callback
     * @return {THIS}
     */
    onEvent(key, callback) {
        if (!key || !callback) {
            return (/** @type {?} */ (this));
        }
        if (!(/** @type {?} */ (this)).componentRef.instance[key]) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).subscriptions.add((/** @type {?} */ (this)).componentRef.instance[key].subscribe(callback));
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} callback
     * @return {THIS}
     */
    onDestroy(callback) {
        (/** @type {?} */ (this)).destroyActions.push(callback);
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subscriptions.unsubscribe();
        this.componentRef.destroy();
        this.destroyActions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        action => action()));
        this.destroyActions = [];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluc3RhbmNlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHppcC93ZWIuY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wb25lbnQvY29tcG9uZW50LWluc3RhbmNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3BDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFTMUIsWUFDWSxZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFUakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBU3pCLENBQUM7Ozs7SUFQSixJQUFJLE9BQU87UUFDUCxPQUFPLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUM7YUFDdEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUM7SUFDckMsQ0FBQzs7Ozs7Ozs7SUFNRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2Y7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxRQUErQjtRQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7U0FDZjtRQUNELG1CQUFBLElBQUksRUFBQSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ2xCLG1CQUFBLElBQUksRUFBQSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUN0RCxDQUFDO1FBQ0YsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQW9CO1FBQzFCLG1CQUFBLElBQUksRUFBQSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7Ozs7SUE1Q0csMENBQTJDOzs7OztJQUMzQywyQ0FBNEI7Ozs7O0lBUXhCLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEluc3RhbmNlPFQ+IHtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgcHJpdmF0ZSBkZXN0cm95QWN0aW9ucyA9IFtdO1xuXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAgICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+LFxuICAgICkge31cblxuICAgIHNldFByb3Aoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uRXZlbnQoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJnczogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgaWYgKCFrZXkgfHwgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldLnN1YnNjcmliZShjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUFjdGlvbnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveUFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4gYWN0aW9uKCkpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lBY3Rpb25zID0gW107XG4gICAgfVxufVxuIl19