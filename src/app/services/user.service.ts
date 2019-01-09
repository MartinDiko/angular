import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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

  getUsers():Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      },1000);

      setTimeout(() => {
        observer.next(2);
      },2000);

      setTimeout(() => {
        observer.next(3);
      },3000);

      setTimeout(() => {
        observer.next({ name: 'Brad'});
      },4000);
    });

    return this.data;
  }
}
