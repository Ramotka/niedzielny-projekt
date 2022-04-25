import { InjectionToken } from '@angular/core';
import { UserDetailsDTO } from './user-details.dto';

export const ADDS_USER_DETAILS_DTO = new InjectionToken<AddsUserDetailsDtoPort>(
  'ADDS_USER_DETAILS_DTO'
);

export interface AddsUserDetailsDtoPort {
  add(userDetails: Partial<UserDetailsDTO>): void;
}
