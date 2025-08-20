import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // BehaviorSubjects hold the latest value & notify all subscribers
  private nameSource = new BehaviorSubject<string>('Sai');
  private ageSource = new BehaviorSubject<number>(28);

  // Expose as observables for components to subscribe
  name$ = this.nameSource.asObservable();
  age$ = this.ageSource.asObservable();

  // Methods to update values
  updateName(newName: string) {
    this.nameSource.next(newName);
  }

  updateAge(newAge: number) {
    this.ageSource.next(newAge);
  }
}
