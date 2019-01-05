import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.users = this.dataService.getUsers();
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
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
} // end of class 
