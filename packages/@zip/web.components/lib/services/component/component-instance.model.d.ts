import { ComponentRef } from '@angular/core';
export declare class ComponentInstance<T> {
    private componentRef;
    private subscriptions;
    private destroyActions;
    readonly element: HTMLElement;
    constructor(componentRef: ComponentRef<T>);
    setProp(key: string, value: any): this;
    onEvent(key: string, callback: (...args: any) => any): this;
    onDestroy(callback: () => void): this;
    destroy(): void;
}
