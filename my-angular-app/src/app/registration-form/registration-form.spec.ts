import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css']
})
export class RegistrationFormComponent {
  name: string = '';
  password: any | null = null;

  onSubmit() {
    console.log('Form submitted:', { name: this.name, passord: this.password });
  }
}
