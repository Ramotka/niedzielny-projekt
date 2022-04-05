import { InjectionToken } from '@angular/core';

export const REMOVES_DIET_DTO = new InjectionToken<RemovesDietDtoPort>(
  'REMOVES_DIET_DTO'
);

export interface RemovesDietDtoPort {
  remove(id: string): void;
}
