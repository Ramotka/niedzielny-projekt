import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsRoomDtoPort } from '../../../application/ports/secondary/adds-room.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';

@Injectable()
export class FirebaseRoomService implements AddsRoomDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(room: Partial<RoomDTO>): void {
    this._client.collection('rooms').add(room);
  }
}
