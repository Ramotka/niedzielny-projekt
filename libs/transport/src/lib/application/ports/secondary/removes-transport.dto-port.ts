import { InjectionToken } from '@angular/core';

export const REMOVES_TRANSPORT_DTO = new InjectionToken<RemovesTransportDtoPort>('REMOVES_TRANSPORT_DTO');

export interface RemovesTransportDtoPort {
  remove(id: string): void;
}
