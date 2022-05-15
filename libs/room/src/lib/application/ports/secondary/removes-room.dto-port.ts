import { InjectionToken } from '@angular/core';

export const REMOVES_ROOM_DTO = new InjectionToken<RemovesRoomDtoPort>(
  'REMOVES_ROOM_DTO'
);

export interface RemovesRoomDtoPort {
  remove(id: string): void;
}
