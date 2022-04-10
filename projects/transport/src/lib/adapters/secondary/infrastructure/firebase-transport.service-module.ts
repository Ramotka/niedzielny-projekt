import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTransportService } from './firebase-transport.service';
import { ADDS_TRANSPORT_DTO } from '../../../application/ports/secondary/adds-transport.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTransportService,
    { provide: ADDS_TRANSPORT_DTO, useExisting: FirebaseTransportService },
  ],
  exports: [],
})
export class FirebaseTransportServiceModule {}
