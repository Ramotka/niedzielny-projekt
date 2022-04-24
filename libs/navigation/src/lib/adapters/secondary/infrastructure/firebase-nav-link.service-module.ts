import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { NgModule } from "@angular/core";
import { FirebaseNavLinkService } from "./firebase-nav-link.service";
import { GETS_ALL_NAV_LINK_DTO } from "../../../application/ports/secondary/gets-all-nav-link.dto-port";

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseNavLinkService,
    { provide: GETS_ALL_NAV_LINK_DTO, useExisting: FirebaseNavLinkService },
  ],
  exports: [],
})
export class FirebaseNavLinkServiceModule {}
