import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css']
})
export class UserProfile {
  @Input() name!: string;
  @Input() age!: number;

  increaseAge() {
    this.age++;
  }

  changeName() {
    this.name = this.name === 'John Doe' ? 'Jane Smith' : 'John Doe';
  }
}
