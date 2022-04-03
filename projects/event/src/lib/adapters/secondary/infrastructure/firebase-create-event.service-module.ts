import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCreateEventService } from './firebase-create-event.service';
import { ADDS_EVENT_DTO } from '../../../application/ports/secondary/adds-event.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCreateEventService, { provide: ADDS_EVENT_DTO, useExisting: FirebaseCreateEventService }],
  	exports: [] })
export class FirebaseCreateEventServiceModule {
}
