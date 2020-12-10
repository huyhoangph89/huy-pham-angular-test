import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('~home').then((m) => m.HomeModule)
            },
            {
                path: '**',
                redirectTo: 'not-found'
            }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
