import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-totos',
    templateUrl: './totos.component.html',
    styleUrls: ['./totos.component.scss']
})
export class TotosComponent implements OnInit {
    @Input()
    todos: [];
    date = new Date();

    constructor() { }

    ngOnInit(): void {
        console.log(this.todos);
    }

    dd(): string {
        let i = '';
        i = 'sdfsdfsf';
        return i;
    }
}
