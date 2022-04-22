import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseUserDetailsService } from './firebase-user-details.service';
import { REMOVES_USER_DETAILS_DTO } from '../../../application/ports/secondary/removes-user-details.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseUserDetailsService, { provide: REMOVES_USER_DETAILS_DTO, useExisting: FirebaseUserDetailsService }],
  	exports: [] })
export class FirebaseUserDetailsServiceModule {
}
