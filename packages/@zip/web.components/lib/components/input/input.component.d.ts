import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class InputComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    type: string;
    iconLeft: string;
    iconRight: string;
    formControl: FormControl;
    errorMessages: {};
    value: string;
    readonly pending: boolean;
    readonly invalid: boolean;
    readonly error: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouchedCallback: () => void;
    private onChangeCallback;
}
