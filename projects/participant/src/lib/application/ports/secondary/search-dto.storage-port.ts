import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchDTO } from './search.dto';

export const SEARCH_DTO_STORAGE = new InjectionToken<SearchDtoStoragePort>('SEARCH_DTO_STORAGE');

export interface SearchDtoStoragePort {
  next(item: Partial<SearchDTO | undefined>): void;
  asObservable(): Observable<SearchDTO>;
}
