import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { flattenStyles } from '../../../../node_modules/@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = false;
  loaded: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Gabriel',
        lastName: 'Logan',
        email: 'gabriellogan@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:30:00'),
        hide: true
      },
      {
        firstName: 'Mary',
        lastName: 'Johnson',
        email: 'maryjohnson@yahoo.com',
        isActive: true,
        registered: new Date('05/03/2016 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log("Form is not valid!");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
} // end of class 
