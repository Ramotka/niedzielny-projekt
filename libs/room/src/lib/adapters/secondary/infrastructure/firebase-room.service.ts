import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsRoomDtoPort } from '../../../application/ports/secondary/adds-room.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllRoomDtoPort } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { SetsRoomDtoPort } from '../../../application/ports/secondary/sets-room.dto-port';
import { RemovesRoomDtoPort } from '../../../application/ports/secondary/removes-room.dto-port';

@Injectable()
export class FirebaseRoomService
  implements
    AddsRoomDtoPort,
    GetsAllRoomDtoPort,
    SetsRoomDtoPort,
    RemovesRoomDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(room: Partial<RoomDTO>): void {
    this._client.collection('rooms').add(room);
  }

  getAll(criterion: Partial<RoomDTO>): Observable<RoomDTO[]> {
    return this._client
      .collection<RoomDTO>('rooms', (ref) => ref.orderBy('capacity', 'asc'))
      .valueChanges({ idField: 'id' })
      .pipe(map((data: RoomDTO[]) => filterByCriterion(data, criterion)));
  }

  set(room: Partial<RoomDTO>): void {
    this._client.doc('rooms/' + room.id).update(room);
  }

  remove(id: string): void {
    this._client.doc('rooms/' + id).delete();
  }
}
