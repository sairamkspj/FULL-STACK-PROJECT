import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileV2 } from './user-profile-v2';

describe('UserProfileV2', () => {
  let component: UserProfileV2;
  let fixture: ComponentFixture<UserProfileV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
