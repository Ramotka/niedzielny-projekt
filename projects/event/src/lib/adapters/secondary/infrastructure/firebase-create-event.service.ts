import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FirebaseCreateEventService {
  constructor(private _client: AngularFirestore) {
  }
}
