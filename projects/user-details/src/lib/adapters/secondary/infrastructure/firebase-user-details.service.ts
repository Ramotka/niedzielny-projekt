import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class FirebaseUserDetailsService {
  constructor(private _auth: AngularFireAuth) {}
}
