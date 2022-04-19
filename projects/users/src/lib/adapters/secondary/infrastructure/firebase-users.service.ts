import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsUserDtoPort } from '../../../application/ports/secondary/adds-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseUsersService
  implements AddsUserDtoPort, GetsAllUserDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  getAll(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }
}
