import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantDTO } from './participant.dto';

export const GETS_ALL_SEARCH_DTO = new InjectionToken<GetsAllSearchDtoPort>(
  'GETS_ALL_SEARCH_DTO'
);

export interface GetsAllSearchDtoPort {
  getAllSearch(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]>;
}
