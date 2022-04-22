import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, map, Observable, of, take } from 'rxjs';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/gets-one-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/credentials.dto';
import { RemovesCredentialsDtoPort } from '../../../application/ports/secondary/removes-credentials.dto-port';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseAuthService
  implements
    GetsOneUserDtoPort,
    AddsCredentialsDtoPort,
    RemovesCredentialsDtoPort
{
  constructor(private _client: AngularFireAuth, private _router: Router) {}

  getOne(): Observable<UserDTO | null> {
    return this._client.user;
  }

  add(credentials: CredentialsDTO): Observable<void> {
    return from(
      this._client.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      take(1),
      catchError((error) => of(void 0)),
      map(() => void 0)
    );
  }

  remove(): void {
    this._client.signOut().then(() => this._router.navigate(['']));
  }
}
