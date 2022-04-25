import { InjectionToken } from '@angular/core';
import { AttractionDTO } from './attraction.dto';

export const SETS_ATTRACTION_DTO = new InjectionToken<SetsAttractionDtoPort>('SETS_ATTRACTION_DTO');

export interface SetsAttractionDtoPort {
  set(attraction: Partial<AttractionDTO>): void;
}
