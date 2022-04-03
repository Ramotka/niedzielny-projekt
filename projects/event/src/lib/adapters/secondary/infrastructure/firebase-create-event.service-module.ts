import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCreateEventService } from './firebase-create-event.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCreateEventService],
  	exports: [] })
export class FirebaseCreateEventServiceModule {
}
