import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseTransportService {
  constructor(private _client: AngularFirestore) {
  }
}
