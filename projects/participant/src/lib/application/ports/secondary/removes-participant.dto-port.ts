import { InjectionToken } from '@angular/core';

export const REMOVES_PARTICIPANT_DTO = new InjectionToken<RemovesParticipantDtoPort>('REMOVES_PARTICIPANT_DTO');

export interface RemovesParticipantDtoPort {
  remove(id: string): void;
}
