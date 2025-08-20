import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileV4 } from './user-profile-v4';

describe('UserProfileV4', () => {
  let component: UserProfileV4;
  let fixture: ComponentFixture<UserProfileV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileV4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileV4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
