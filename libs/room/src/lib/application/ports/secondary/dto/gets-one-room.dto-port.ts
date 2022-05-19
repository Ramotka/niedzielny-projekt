import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from '../room.dto';

export const GETS_ONE_ROOM_DTO = new InjectionToken<GetsOneRoomDtoPort>('GETS_ONE_ROOM_DTO');

export interface GetsOneRoomDtoPort {
  getOne(id: string): Observable<RoomDTO>;
}
