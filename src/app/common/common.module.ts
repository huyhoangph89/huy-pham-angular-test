import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as COMPONENTS from '../common/components';

@NgModule({
    declarations: [
        COMPONENTS.BoxComponent
    ],
    exports: [
        COMPONENTS.BoxComponent],
    imports: [
        CommonModule
    ],
    entryComponents: [
        COMPONENTS.BoxComponent,
    ]
})
export class ProductPageModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule
        };
    }
}
