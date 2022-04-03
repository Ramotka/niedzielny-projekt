import { InjectionToken } from '@angular/core';
import { DietDTO } from './diet.dto';

export const ADDS_DIET_DTO = new InjectionToken<AddsDietDtoPort>(
  'ADDS_DIET_DTO'
);

export interface AddsDietDtoPort {
  add(diet: Partial<DietDTO>): void;
}
