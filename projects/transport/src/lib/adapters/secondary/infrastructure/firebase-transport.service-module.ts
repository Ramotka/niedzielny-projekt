import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTransportService } from './firebase-transport.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTransportService],
  	exports: [] })
export class FirebaseTransportServiceModule {
}
