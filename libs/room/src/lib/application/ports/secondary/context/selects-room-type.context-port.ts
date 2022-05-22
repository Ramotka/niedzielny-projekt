import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomTypeContext } from './room-type.context';

export const SELECTS_ROOM_TYPE_CONTEXT = new InjectionToken<SelectsRoomTypeContextPort>('SELECTS_ROOM_TYPE_CONTEXT');

export interface SelectsRoomTypeContextPort {
  select(): Observable<Partial<RoomTypeContext>>;
}
