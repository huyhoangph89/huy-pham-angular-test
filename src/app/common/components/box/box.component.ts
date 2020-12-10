import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
export class BoxComponent {
    @Input()
    speed: string;
    style = {};
    constructor() {}

    getPos(e){
        const x = e.clientX;
        const y = e.clientY;
        this.getBkUrl(x,y);
    }
    getBkUrl(x,y) {
        const styles = {
            'transition-duration': `${this.speed}ms`,
            'left' : `${ x ? x - 36 : 0 }px`,
            'top' : `${ y ? y - 36 : 0 }px`,
        };
        this.style = styles;
        return styles;
    }
}
