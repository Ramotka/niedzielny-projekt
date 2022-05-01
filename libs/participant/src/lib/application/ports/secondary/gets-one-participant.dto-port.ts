import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantDTO } from './participant.dto';

export const GETS_ONE_PARTICIPANT_DTO =
  new InjectionToken<GetsOneParticipantDtoPort>('GETS_ONE_PARTICIPANT_DTO');

export interface GetsOneParticipantDtoPort {
  getOne(criterion: Partial<ParticipantDTO>): Observable<ParticipantDTO>;
}
