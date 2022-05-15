import { InjectionToken } from '@angular/core';
import { RoomDTO } from './room.dto';

export const SETS_ROOM_DTO = new InjectionToken<SetsRoomDtoPort>(
  'SETS_ROOM_DTO'
);

export interface SetsRoomDtoPort {
  set(room: Partial<RoomDTO>): void;
}
