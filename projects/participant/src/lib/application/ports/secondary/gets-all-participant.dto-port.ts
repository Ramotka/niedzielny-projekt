import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantDTO } from './participant.dto';

export const GETS_ALL_PARTICIPANT_DTO = new InjectionToken<GetsAllParticipantDtoPort>('GETS_ALL_PARTICIPANT_DTO');

export interface GetsAllParticipantDtoPort {
  getAll(criterion?: Partial<ParticipantDTO>): Observable<ParticipantDTO[]>;
}
