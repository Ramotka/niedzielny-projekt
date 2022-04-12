import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { NgModule } from "@angular/core";
import { FirebaseEventService } from "./firebase-event.service";
import { ADDS_EVENT_DTO } from "../../../application/ports/secondary/adds-event.dto-port";
import { GETS_ALL_EVENT_DTO } from "../../../application/ports/secondary/gets-all-event.dto-port";
import { GETS_ONE_EVENT_DTO } from "../../../application/ports/secondary/gets-one-event.dto-port";
import { REMOVES_EVENT_DTO } from "../../../application/ports/secondary/removes-event.dto-port";
import { SETS_EVENT_DTO } from "../../../application/ports/secondary/sets-event.dto-port";

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEventService,
    { provide: ADDS_EVENT_DTO, useExisting: FirebaseEventService },
    { provide: GETS_ALL_EVENT_DTO, useExisting: FirebaseEventService },
    { provide: GETS_ONE_EVENT_DTO, useExisting: FirebaseEventService },
    { provide: REMOVES_EVENT_DTO, useExisting: FirebaseEventService },
    { provide: SETS_EVENT_DTO, useExisting: FirebaseEventService },
  ],
  exports: [],
})
export class FirebaseEventServiceModule {}
