// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserProfile } from './user-profile/user-profile';
// import { UserProfileV2 } from './user-profile-v2/user-profile-v2';
// import { UserProfileV3 } from './user-profile-v3/user-profile-v3';
// import { UserProfileV4 } from './user-profile-v4/user-profile-v4';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, UserProfile, UserProfileV2, UserProfileV3,UserProfileV4],
//   template: `
//     <h1>Parent Component</h1>

//     <!-- Your Old Examples -->
//     <h3>Default User (no inputs passed)</h3>
//     <app-user-profile></app-user-profile>

//     <h3>Custom User from Parent</h3>
//     <app-user-profile [name]="'Michael Scott'" [age]="45"></app-user-profile>

//     <h2>New Component</h2>
//     <app-user-profile-v2 name="Alice" [age]="28"></app-user-profile-v2>

//     <h2>Output component</h2>
//     <p>Parent Age Value: {{ parentAgeV3 }}</p>
//     <p>Parent Name Value: {{ parentNameV3 }}</p>

//     <app-user-profile-v3
//       [name]="parentNameV3"
//       [age]="parentAgeV3"
//       (ageChange)="updateAgeV3($event)"
//       (nameChange)="updateNameV3($event)">
//     </app-user-profile-v3>

//     <hr />

//     <!-- Old Directive Practice -->
//     <h2>*ngIf Example</h2>
//     <button (click)="toggleVisibility()">Toggle Message</button>
//     <p *ngIf="isVisible">Now you see me!</p>

//     <h2>*ngFor Example</h2>
//     <ul>
//       <li *ngFor="let user of users" [ngClass]="{ 'highlight': user === 'Alice' }">
//         {{ user }}
//       </li>
//     </ul>

//     <h2>[ngStyle] Example</h2>
//     <p [ngStyle]="{ 'color': isActive ? 'green' : 'red' }">
//       This text changes color
//     </p>
//     <button (click)="toggleActive()">Toggle Color</button>

//     <h2>Template Reference Example</h2>
//     <input #newUserInput type="text">
//     <button (click)="addUser(newUserInput.value)">Add User</button>

//     <hr />

//     <!-- 🚀 New Mini App -->
//     <h2>Todo List App</h2>

//     <input #todoInput type="text" placeholder="Enter task">
//     <button (click)="addTask(todoInput.value); todoInput.value=''">Add Task</button>

//     <ul>
//       <li *ngFor="let task of tasks" 
//           [ngClass]="{ 'done': task.completed }"
//           [ngStyle]="{ 'color': task.completed ? 'gray' : 'black' }">

//         {{ task.title }}
//         <button (click)="toggleTask(task)">✔</button>
//         <button (click)="removeTask(task)">❌</button>
//       </li>
//     </ul>

//     <p *ngIf="tasks.length === 0">No tasks yet! 🎉</p>

//     <h2>Service with RxJS Demo</h2>
//     <app-user-profile-v4></app-user-profile-v4>
//     <app-user-profile-v4></app-user-profile-v4>

//   `,
//   styles: [`
//     .highlight { font-weight: bold; color: blue; }
//     .done { text-decoration: line-through; }
//   `]
// })
// export class App {
//   parentNameV3 = 'Sai';
//   parentAgeV3 = 28;

//   updateAgeV3(newAge: number) {
//     this.parentAgeV3 = newAge;
//   }

//   updateNameV3(newName: string) {
//     this.parentNameV3 = newName;
//   }

//   // Old directive properties
//   isVisible = true;
//   users: string[] = ['Alice', 'Bob'];
//   isActive = false;

//   toggleVisibility() {
//     this.isVisible = !this.isVisible;
//   }

//   toggleActive() {
//     this.isActive = !this.isActive;
//   }

//   addUser(name: string) {
//     if (name.trim()) {
//       this.users.push(name);
//     }
//   }

//   // 🚀 New Mini Todo App
//   tasks = [
//     { title: 'Learn Angular', completed: false },
//     { title: 'Practice Directives', completed: false }
//   ];

//   addTask(title: string) {
//     if (title.trim()) {
//       this.tasks.push({ title, completed: false });
//     }
//   }

//   toggleTask(task: any) {
//     task.completed = !task.completed;
//   }

//   removeTask(task: any) {
//     this.tasks = this.tasks.filter(t => t !== task);
//   }
// }
// import { Component } from '@angular/core';
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, RouterLink, RouterLinkActive],
//   styleUrls: ['./app.css'],
//   template: `
//     <style>
//     a.one {
//       margin-right: 50px; /* space to the right of each link */
//       text-decoration: underline;
//     }
//     </style>
//     <h1>Angular Practice App</h1>
//     <nav>
//       <a class = "one" routerLink="/v3" routerLinkActive="active">User Profile V3</a> |
//       <a class = "one" routerLink="/v4" routerLinkActive="active">User Profile V4 (Service)</a> |
//       <a class = "one" routerLink="/form" routerLinkActive="active">Registration Form</a>
//     </nav>
//     <hr />
//     <router-outlet></router-outlet> <!-- 👈 ONLY the active route’s component shows -->
//   `
// })
// export class AppComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RegistrationFormComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'My Angular App';
}
