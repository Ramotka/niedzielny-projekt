import { InjectionToken } from '@angular/core';
import { TransportDTO } from './transport.dto';

export const ADDS_TRANSPORT_DTO = new InjectionToken<AddsTransportDtoPort>('ADDS_TRANSPORT_DTO');

export interface AddsTransportDtoPort {
  add(transport: Partial<TransportDTO>): void;
}
