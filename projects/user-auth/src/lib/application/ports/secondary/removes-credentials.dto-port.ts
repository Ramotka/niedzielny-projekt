import { InjectionToken } from '@angular/core';

export const REMOVES_CREDENTIALS_DTO =
  new InjectionToken<RemovesCredentialsDtoPort>('REMOVES_CREDENTIALS_DTO');

export interface RemovesCredentialsDtoPort {
  remove(): void;
}
