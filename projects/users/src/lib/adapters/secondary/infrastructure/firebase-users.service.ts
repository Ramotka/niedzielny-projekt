import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsUserDtoPort } from '../../../application/ports/secondary/adds-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';

@Injectable()
export class FirebaseUsersService implements AddsUserDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }
}
