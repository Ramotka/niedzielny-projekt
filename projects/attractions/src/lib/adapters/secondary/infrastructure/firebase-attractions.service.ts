import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseAttractionsService {
  constructor(private _client: AngularFirestore) {
  }
}
