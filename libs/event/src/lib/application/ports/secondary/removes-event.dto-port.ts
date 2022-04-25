import { InjectionToken } from '@angular/core';

export const REMOVES_EVENT_DTO = new InjectionToken<RemovesEventDtoPort>('REMOVES_EVENT_DTO');

export interface RemovesEventDtoPort {
  remove(id: string): void;
}
