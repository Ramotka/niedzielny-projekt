import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { filterByCriterion } from '@lowgular/shared';
import { AddsRoomDtoPort } from '../../../application/ports/secondary/adds-room.dto-port';
import { GetsAllRoomDtoPort } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { SetsRoomDtoPort } from '../../../application/ports/secondary/sets-room.dto-port';
import { RemovesRoomDtoPort } from '../../../application/ports/secondary/removes-room.dto-port';
import { GetsOneRoomDtoPort } from '../../../application/ports/secondary/dto/gets-one-room.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';

@Injectable()
export class FirebaseRoomService
  implements
    AddsRoomDtoPort,
    GetsAllRoomDtoPort,
    SetsRoomDtoPort,
    RemovesRoomDtoPort, GetsOneRoomDtoPort
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

  getOne(id: string): Observable<RoomDTO> {
    return this._client.doc<RoomDTO>('rooms/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }
}
