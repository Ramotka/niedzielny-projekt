import { InjectionToken } from '@angular/core';
import { DietDTO } from './diet.dto';

export const SETS_DIET_DTO = new InjectionToken<SetsDietDtoPort>(
  'SETS_DIET_DTO'
);

export interface SetsDietDtoPort {
  set(diet: Partial<DietDTO>): void;
}
