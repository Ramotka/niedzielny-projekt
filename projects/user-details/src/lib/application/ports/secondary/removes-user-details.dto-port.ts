import { InjectionToken } from '@angular/core';

export const REMOVES_USER_DETAILS_DTO =
  new InjectionToken<RemovesUserDetailsDtoPort>('REMOVES_USER_DETAILS_DTO');

export interface RemovesUserDetailsDtoPort {
  remove(id: string): void;
}
