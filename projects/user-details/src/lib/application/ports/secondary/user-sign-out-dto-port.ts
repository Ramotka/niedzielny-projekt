import { InjectionToken } from '@angular/core';

export const USER_SIGN_OUT_DTO = new InjectionToken<UserSignOutDtoPort>(
  'USER_SIGN_OUT_DTO'
);

export interface UserSignOutDtoPort {
  userSingOut(): void;
}
