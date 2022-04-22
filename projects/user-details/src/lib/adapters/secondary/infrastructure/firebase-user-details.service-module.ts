import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseUserDetailsService } from './firebase-user-details.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseUserDetailsService],
  	exports: [] })
export class FirebaseUserDetailsServiceModule {
}
