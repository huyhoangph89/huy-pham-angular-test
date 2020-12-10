import { OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
export declare class NumericInputDirective implements OnInit {
    private control;
    constructor(control: NgControl);
    ngOnInit(): void;
}
