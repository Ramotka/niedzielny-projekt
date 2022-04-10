import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllNavLinkDtoPort } from '../../../application/ports/secondary/gets-all-nav-link.dto-port';
import { NavLinkDTO } from '../../../application/ports/secondary/nav-link.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseNavLinkService implements GetsAllNavLinkDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<NavLinkDTO>): Observable<NavLinkDTO[]> {
    return of([
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'assets/icons/nav-links/dashboard.svg',
      },
      {
        name: 'Event',
        link: 'event-form',
        icon: 'assets/icons/nav-links/event.svg',
      },
      {
        name: 'Diet',
        link: 'diet',
        icon: 'assets/icons/nav-links/diet.svg',
      },
      {
        name: 'Transport',
        link: 'transport',
        icon: 'assets/icons/nav-links/transport.svg',
      },
      {
        name: 'Attractions',
        link: '/',
        icon: 'assets/icons/nav-links/attractions.svg',
      },
      {
        name: 'Users',
        link: '/',
        icon: 'assets/icons/nav-links/users.svg',
      },
    ]);
  }
}
