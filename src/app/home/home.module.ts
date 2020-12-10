import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductPageModule } from '../common/common.module';
import * as VIEWS from '~home/views';

@NgModule({
  declarations: [VIEWS.HomeViewComponent],
    imports: [
        CommonModule,
        ProductPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: VIEWS.HomeViewComponent
            }
        ])
    ]
})
export class HomeModule {}
