import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsEventDtoPort } from '../../../application/ports/secondary/adds-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseCreateEventService implements AddsEventDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(event: Partial<EventDTO>): void {
    this._client.collection('events').add(event);
  }
}
