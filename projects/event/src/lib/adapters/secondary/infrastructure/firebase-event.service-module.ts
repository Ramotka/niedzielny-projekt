import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseEventService } from './firebase-event.service';
import { ADDS_EVENT_DTO } from '../../../application/ports/secondary/adds-event.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEventService,
    { provide: ADDS_EVENT_DTO, useExisting: FirebaseEventService },
  ],
  exports: [],
})
export class FirebaseEventServiceModule {}