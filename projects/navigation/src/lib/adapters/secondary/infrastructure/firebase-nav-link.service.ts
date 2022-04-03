import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { GetsAllNavLinkDtoPort } from "../../../application/ports/secondary/gets-all-nav-link.dto-port";
import { NavLinkDTO } from "../../../application/ports/secondary/nav-link.dto";
import { filterByCriterion } from "@lowgular/shared";

@Injectable()
export class FirebaseNavLinkService implements GetsAllNavLinkDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<NavLinkDTO>): Observable<NavLinkDTO[]> {
    return of([
      {
        name: "Dashboard",
        link: "/",
      },
      {
        name: "Event",
        link: "/event-form",
      },
      {
        name: "Diet",
        link: "/diet",
      },
      {
        name: "Transport",
        link: "/",
      },
      {
        name: "Attractions",
        link: "/",
      },
      {
        name: "Users",
        link: "/",
      },
    ]);
  }
}
