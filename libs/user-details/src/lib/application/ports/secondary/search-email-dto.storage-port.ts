import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchEmailDTO } from './search-email.dto';

export const SEARCH_EMAIL_DTO_STORAGE = new InjectionToken<SearchEmailDtoStoragePort>('SEARCH_EMAIL_DTO_STORAGE');

export interface SearchEmailDtoStoragePort {
  next(item: Partial<SearchEmailDTO | undefined>): void;
  asObservable(): Observable<SearchEmailDTO>;
}
