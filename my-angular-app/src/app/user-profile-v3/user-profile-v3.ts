import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-v3',
  standalone: true,
  templateUrl: './user-profile-v3.html',
  styleUrls: ['./user-profile-v3.css']
})
export class UserProfileV3 {
  @Input() name: string = 'sai';
  @Input() age: number = 28 ;

  constructor() {
    console.log('V3 Loaded with defaults:', this.name, this.age);
  }

  @Output() ageChange = new EventEmitter<number>();
  @Output() nameChange = new EventEmitter<string>();

  increaseAge() {
    this.age++;
    this.ageChange.emit(this.age);
  }

  changeName() {
    this.name = this.name === 'John Doe' ? 'Jane Smith' : 'John Doe';
    this.nameChange.emit(this.name);
  }
}
