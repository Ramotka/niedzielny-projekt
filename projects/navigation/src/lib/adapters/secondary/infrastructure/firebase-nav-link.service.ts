import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GetsAllNavLinkDtoPort } from "../../../application/ports/secondary/gets-all-nav-link.dto-port";
import { NavLinkDTO } from "../../../application/ports/secondary/nav-link.dto";
import { filterByCriterion } from "@lowgular/shared";

@Injectable()
export class FirebaseNavLinkService implements GetsAllNavLinkDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<NavLinkDTO>): Observable<NavLinkDTO[]> {
    return this._client
      .collection<NavLinkDTO>("nav-links")
      .valueChanges({ idField: "id" })
      .pipe(map((data: NavLinkDTO[]) => filterByCriterion(data, criterion)));
  }
}
