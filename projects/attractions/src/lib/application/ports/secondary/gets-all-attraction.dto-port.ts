import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionDTO } from './attraction.dto';

export const GETS_ALL_ATTRACTION_DTO = new InjectionToken<GetsAllAttractionDtoPort>('GETS_ALL_ATTRACTION_DTO');

export interface GetsAllAttractionDtoPort {
  getAll(criterion?: Partial<AttractionDTO>): Observable<AttractionDTO[]>;
}
