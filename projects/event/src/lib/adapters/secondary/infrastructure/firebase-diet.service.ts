import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsDietDtoPort } from '../../../application/ports/secondary/adds-diet.dto-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';

@Injectable()
export class FirebaseDietService implements AddsDietDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(diet: Partial<DietDTO>): void {
    this._client.collection('diets').add(diet);
  }
}
