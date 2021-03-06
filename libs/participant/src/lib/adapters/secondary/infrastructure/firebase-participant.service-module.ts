import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseParticipantService } from './firebase-participant.service';
import { ADDS_PARTICIPANT_DTO } from '../../../application/ports/secondary/adds-participant.dto-port';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { REMOVES_PARTICIPANT_DTO } from '../../../application/ports/secondary/removes-participant.dto-port';
import { SETS_PARTICIPANT_DTO } from '../../../application/ports/secondary/sets-participant.dto-port';
import { GETS_ONE_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { GETS_ALL_SEARCH_DTO } from '../../../application/ports/secondary/gets-all-search.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseParticipantService,
    { provide: ADDS_PARTICIPANT_DTO, useExisting: FirebaseParticipantService },
    {
      provide: GETS_ALL_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantService,
    },
    {
      provide: REMOVES_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantService,
    },
    { provide: SETS_PARTICIPANT_DTO, useExisting: FirebaseParticipantService },
    {
      provide: GETS_ONE_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantService,
    },
    { provide: GETS_ALL_SEARCH_DTO, useExisting: FirebaseParticipantService },
  ],
  exports: [],
})
export class FirebaseParticipantServiceModule {}
