import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomTypeContext } from './room-type.context';

export const SETS_STATE_ROOM_TYPE_CONTEXT = new InjectionToken<SetsStateRoomTypeContextPort>('SETS_STATE_ROOM_TYPE_CONTEXT');

export interface SetsStateRoomTypeContextPort {
  setState(state: RoomTypeContext): Observable<void>;
}
