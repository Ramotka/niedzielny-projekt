import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/gets-one-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/credentials.dto';
import { RemovesCredentialsDtoPort } from '../../../application/ports/secondary/removes-credentials.dto-port';

@Injectable()
export class FirebaseAuthService
  implements
    GetsOneUserDtoPort,
    AddsCredentialsDtoPort,
    RemovesCredentialsDtoPort
{
  constructor(private _client: AngularFireAuth) {}

  getOne(): Observable<UserDTO | null> {
    return this._client.user;
  }

  add(credentials: CredentialsDTO): void {
    this._client.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  remove(): void {
    this._client.signOut();
  }
}
