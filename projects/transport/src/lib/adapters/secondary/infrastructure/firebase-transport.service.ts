import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTransportDtoPort } from '../../../application/ports/secondary/adds-transport.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';

@Injectable()
export class FirebaseTransportService implements AddsTransportDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(transport: Partial<TransportDTO>): void {
    this._client.collection('transports').add(transport);
  }
}
