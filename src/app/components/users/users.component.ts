import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

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
  data: any;
  constructor(private dataService: UserService) { }

  ngOnInit() {
    
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    }); 
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
