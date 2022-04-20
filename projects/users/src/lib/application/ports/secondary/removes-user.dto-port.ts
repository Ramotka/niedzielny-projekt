import { InjectionToken } from '@angular/core';

export const REMOVES_USER_DTO = new InjectionToken<RemovesUserDtoPort>('REMOVES_USER_DTO');

export interface RemovesUserDtoPort {
  remove(id: string): void;
}
