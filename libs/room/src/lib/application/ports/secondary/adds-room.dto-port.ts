import { InjectionToken } from '@angular/core';
import { RoomDTO } from './room.dto';

export const ADDS_ROOM_DTO = new InjectionToken<AddsRoomDtoPort>(
  'ADDS_ROOM_DTO'
);

export interface AddsRoomDtoPort {
  add(room: Partial<RoomDTO>): void;
}
