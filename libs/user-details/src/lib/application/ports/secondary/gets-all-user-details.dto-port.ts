import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from './user-details.dto';

export const GETS_ALL_USER_DETAILS_DTO = new InjectionToken<GetsAllUserDetailsDtoPort>('GETS_ALL_USER_DETAILS_DTO');

export interface GetsAllUserDetailsDtoPort {
  getAll(criterion?: Partial<UserDetailsDTO>): Observable<UserDetailsDTO[]>;
}
