import { InjectionToken } from '@angular/core';
import { CredentialsDTO } from './credentials.dto';

export const ADDS_CREDENTIALS_DTO = new InjectionToken<AddsCredentialsDtoPort>('ADDS_CREDENTIALS_DTO');

export interface AddsCredentialsDtoPort {
  add(credentials: Partial<CredentialsDTO>): void;
}
