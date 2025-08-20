import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile-v4',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>User Profile V4 (Service + RxJS)</h3>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button (click)="changeName()">Change Name</button>
    <button (click)="increaseAge()">Increase Age</button>
  `
})
export class UserProfileV4 {
  name = '';
  age = 0;

  constructor(private userService: UserService) {
    // Subscribe to service observables
    this.userService.name$.subscribe(value => this.name = value);
    this.userService.age$.subscribe(value => this.age = value);
  }

  changeName() {
    const newName = this.name === 'Sai' ? 'Alice' : 'Sai';
    this.userService.updateName(newName);
  }

  increaseAge() {
    this.userService.updateAge(this.age + 1);
  }
}
