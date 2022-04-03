import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DietDTO } from './diet.dto';

export const GETS_ALL_DIET_DTO = new InjectionToken<GetsAllDietDtoPort>('GETS_ALL_DIET_DTO');

export interface GetsAllDietDtoPort {
  getAll(criterion?: Partial<DietDTO>): Observable<DietDTO[]>;
}
