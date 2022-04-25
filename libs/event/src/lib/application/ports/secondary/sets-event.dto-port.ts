import { InjectionToken } from '@angular/core';
import { EventDTO } from './event.dto';

export const SETS_EVENT_DTO = new InjectionToken<SetsEventDtoPort>('SETS_EVENT_DTO');

export interface SetsEventDtoPort {
  set(event: Partial<EventDTO>): void;
}
