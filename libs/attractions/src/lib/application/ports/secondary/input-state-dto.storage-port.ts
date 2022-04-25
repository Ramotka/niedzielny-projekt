import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InputStateDTO } from './input-state.dto';

export const INPUT_STATE_DTO_STORAGE = new InjectionToken<InputStateDtoStoragePort>('INPUT_STATE_DTO_STORAGE');

export interface InputStateDtoStoragePort {
  next(item: Partial<InputStateDTO | undefined>): void;
  asObservable(): Observable<InputStateDTO>;
}
