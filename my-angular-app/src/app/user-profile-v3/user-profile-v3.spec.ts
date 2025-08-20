import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileV3 } from './user-profile-v3';

describe('UserProfileV3', () => {
  let component: UserProfileV3;
  let fixture: ComponentFixture<UserProfileV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
