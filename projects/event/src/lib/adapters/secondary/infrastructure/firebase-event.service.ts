import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsEventDtoPort } from '../../../application/ports/secondary/adds-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { GetsOneEventDtoPort } from '../../../application/ports/secondary/gets-one-event.dto-port';
import { RemovesEventDtoPort } from '../../../application/ports/secondary/removes-event.dto-port';
import { SetsEventDtoPort } from '../../../application/ports/secondary/sets-event.dto-port';

interface EventData {
  imageUrl: string;
  description: string;
  title: string;
  fromDate: { toDate: () => Date };
  toDate: { toDate: () => Date };
  id: string;
}

const mapToEventDTO = (evt: EventData) => ({
  ...evt,
  fromDate: evt.fromDate?.toDate(),
  toDate: evt.toDate?.toDate(),
});
@Injectable()
export class FirebaseEventService
  implements
    AddsEventDtoPort,
    GetsAllEventDtoPort,
    GetsOneEventDtoPort,
    RemovesEventDtoPort,
    SetsEventDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(event: Partial<EventDTO>): void {
    this._client.collection('events').add(event);
  }

  getAll(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventData>('events')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: EventData[]) => filterByCriterion(data, criterion)),
        map((data) => data.map(mapToEventDTO))
      );
  }

  getOne(id: string): Observable<EventDTO> {
    return (
      this._client
        .doc<EventData>('events/' + id)
        .valueChanges({ idField: 'id' }) as Observable<EventData>
    ).pipe(map(mapToEventDTO));
  }

  remove(id: string): void {
    this._client.doc('events/' + id).delete();
  }

  set(event: Partial<EventDTO>): void {
    this._client.doc('events/' + event.id).update(event);
  }
}
