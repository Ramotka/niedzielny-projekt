import { InjectionToken } from '@angular/core';

export const REMOVES_ATTRACTION_DTO = new InjectionToken<RemovesAttractionDtoPort>('REMOVES_ATTRACTION_DTO');

export interface RemovesAttractionDtoPort {
  remove(id: string): void;
}
