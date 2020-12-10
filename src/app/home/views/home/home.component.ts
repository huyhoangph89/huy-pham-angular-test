import { Component } from '@angular/core';
@Component({
    selector: 'app-kit-home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeViewComponent {
    value: string;

    getVal(data){
        this.value = data;
    }
}
