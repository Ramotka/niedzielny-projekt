import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { RemovesUserDetailsDtoPort } from '../../../application/ports/secondary/removes-user-details.dto-port';

@Injectable()
export class FirebaseUserDetailsService implements RemovesUserDetailsDtoPort {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  remove(id: string): void {
    this._auth.signOut().then(() => this._router.navigate(['']));
  }
}
