import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
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
  }

  getUsers():User[] {
    console.log('fetching users from service...');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
