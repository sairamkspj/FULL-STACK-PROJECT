import { CommonModule } from '@angular/common';  
import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  standalone: true,
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css'],
  imports: [FormsModule, CommonModule]
})
export class RegistrationFormComponent {
  name = '';
  email = '';
  age = '';
  password = '';
  previewData: any = null;

  constructor(private regService: RegistrationService) {}

  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password
    };

    this.regService.registerUser(data).subscribe({
      next: (res) => {
        console.log("✅ Success:", res);
        this.previewData = res.saved_user; // show saved data
      },
      error: (err) => {
        console.error("❌ Error:", err);
      }
    });
  }
}
