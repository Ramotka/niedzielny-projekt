import { InjectionToken } from '@angular/core';
import { EventDTO } from './event.dto';

export const ADDS_EVENT_DTO = new InjectionToken<AddsEventDtoPort>('ADDS_EVENT_DTO');

export interface AddsEventDtoPort {
  add(event: Partial<EventDTO>): void;
}
