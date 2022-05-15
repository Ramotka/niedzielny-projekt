import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from './room.dto';

export const GETS_ALL_ROOM_DTO = new InjectionToken<GetsAllRoomDtoPort>(
  'GETS_ALL_ROOM_DTO'
);

export interface GetsAllRoomDtoPort {
  getAll(criterion?: Partial<RoomDTO>): Observable<RoomDTO[]>;
}
