import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserDTO } from './current-user.dto';

export const CURRENT_USER_DTO_STORAGE =
  new InjectionToken<CurrentUserDtoStoragePort>('CURRENT_USER_DTO_STORAGE');

export interface CurrentUserDtoStoragePort {
  next(item: Partial<CurrentUserDTO | undefined>): void;
  asObservable(): Observable<CurrentUserDTO>;
}
