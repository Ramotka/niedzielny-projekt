import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AddsUserDetailsDtoPort } from '../../../application/ports/secondary/adds-user-details.dto-port';
import { UserDetailsDTO } from '../../../application/ports/secondary/user-details.dto';

@Injectable()
export class FirebaseUserDetailsService implements AddsUserDetailsDtoPort {
  constructor(
    private _client: AngularFirestore,
    private _auth: AngularFireAuth,
    private _router: Router
  ) {}

  userSignOut(): void {
    this._auth.signOut().then(() => this._router.navigate(['']));
  }

  add(userDetails: Partial<UserDetailsDTO>): void {
    this._client.collection('user-details').add(userDetails);
  }
}
