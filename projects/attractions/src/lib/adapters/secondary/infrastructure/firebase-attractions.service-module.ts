import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseAttractionsService } from './firebase-attractions.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAttractionsService],
  	exports: [] })
export class FirebaseAttractionsServiceModule {
}
