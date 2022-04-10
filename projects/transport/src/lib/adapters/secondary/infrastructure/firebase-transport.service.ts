import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTransportDtoPort } from '../../../application/ports/secondary/adds-transport.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTransportDtoPort } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseTransportService
  implements AddsTransportDtoPort, GetsAllTransportDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(transport: Partial<TransportDTO>): void {
    this._client.collection('transports').add(transport);
  }

  getAll(criterion: Partial<TransportDTO>): Observable<TransportDTO[]> {
    return this._client
      .collection<TransportDTO>('transports')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: TransportDTO[]) => filterByCriterion(data, criterion)));
  }
}
