import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-v2',
  standalone: true,
  templateUrl: './user-profile-v2.html',
  styleUrls: ['./user-profile-v2.css']
})
export class UserProfileV2 {
  @Input() name!: string;
  @Input() age!: number;

  // 👇 New: This will send data to parent
  @Output() ageChanged = new EventEmitter<number>();
  @Output() nameChanged = new EventEmitter<string>();

  increaseAge() {
    this.age++;
    this.ageChanged.emit(this.age); // send updated age
  }

  changeName() {
    this.name = this.name === 'John Doe' ? 'Jane Smith' : 'John Doe';
    this.nameChanged.emit(this.name); // send updated name
  }
}
