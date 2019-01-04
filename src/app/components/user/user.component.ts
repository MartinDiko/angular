import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-user', 
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    //template: '<h2> Martin Diko </h2>'
})

export class UserComponent implements OnInit {
    user: User;

    // methods 
    constructor() {
        
    }

    ngOnInit() {
        this.user = {
            firstName: 'Martin', 
            lastName: 'Diko',
            email: ''
        }
    }
}

