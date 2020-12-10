declare const window: Window;

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '~env';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <main><router-outlet></router-outlet></main>
    `,
    styles: [
        `
            main {
                min-height: 80vh;
            }
        `
    ]
})
export class AppComponent implements OnInit, OnDestroy {
    private subscription = new Subscription();

    constructor(private router: Router) {}

    ngOnInit() {
        // Add environment to window object for development
        if (!environment.production) {
            window['environment'] = environment;
        }

        this.subscription.add(
            // Scroll to top of the page on each route
            this.router.events.subscribe((evt) => {
                if (!(evt instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            })
        );

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
