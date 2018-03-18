import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-editor',
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class EditorComponent {
    @Input() inWidth: number = 16;
    @Input() inHeight: number = 16;
    colorTable: Array<Array<number>>;

    constructor() {
        this.setEditspace();
    }
    setEditspace() {
        this.colorTable = new Array<Array<number>>(this.inHeight);
        this.colorTable.fill(new Array<number>(this.inWidth).fill(0));


    }
}
