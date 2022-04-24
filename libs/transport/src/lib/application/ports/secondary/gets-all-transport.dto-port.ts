import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportDTO } from './transport.dto';

export const GETS_ALL_TRANSPORT_DTO = new InjectionToken<GetsAllTransportDtoPort>('GETS_ALL_TRANSPORT_DTO');

export interface GetsAllTransportDtoPort {
  getAll(criterion?: Partial<TransportDTO>): Observable<TransportDTO[]>;
}
