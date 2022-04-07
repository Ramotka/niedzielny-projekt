import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDTO } from './event.dto';

export const GETS_ALL_EVENT_DTO = new InjectionToken<GetsAllEventDtoPort>(
  'GETS_ALL_EVENT_DTO'
);

export interface GetsAllEventDtoPort {
  getAll(criterion?: Partial<EventDTO>): Observable<EventDTO[]>;
}
