import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FirebaseRoomService {
  constructor(private _client: AngularFirestore) {}
}
