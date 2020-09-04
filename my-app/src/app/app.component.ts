import {Component} from '@angular/core';

interface Todos {
    name: string;
    completed: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todos = [
        {
            name: 'Buy Bread',
            completed: false
        },
        {
            name: 'Buy cake',
            completed: true
        }
    ] as Todos[];
}
