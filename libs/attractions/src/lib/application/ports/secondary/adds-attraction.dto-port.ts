import { InjectionToken } from '@angular/core';
import { AttractionDTO } from './attraction.dto';

export const ADDS_ATTRACTION_DTO = new InjectionToken<AddsAttractionDtoPort>('ADDS_ATTRACTION_DTO');

export interface AddsAttractionDtoPort {
  add(attraction: Partial<AttractionDTO>): void;
}
