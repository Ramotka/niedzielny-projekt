import { InjectionToken } from '@angular/core';
import { TransportDTO } from './transport.dto';

export const SETS_TRANSPORT_DTO = new InjectionToken<SetsTransportDtoPort>(
  'SETS_TRANSPORT_DTO'
);

export interface SetsTransportDtoPort {
  set(transport: Partial<TransportDTO>): void;
}
