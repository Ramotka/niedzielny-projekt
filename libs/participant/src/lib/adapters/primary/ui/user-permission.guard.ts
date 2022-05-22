import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  combineLatest,
  map,
  Observable,
  reduce,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import {
  GetsAllParticipantDtoPort,
  GETS_ALL_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserPermissionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._currentUserDtoStoragePort.asObservable().pipe(
      tap(console.log),
      switchMap((currentUser) =>
        this._getsAllParticipantDto.getAll({
          eventId: route.params?.['eventId'],
          email: currentUser.userEmail,
        })
      ),
      tap(console.log),
      map((data) => {
        if (data.length > 0) {
          return true;
        } else {
          this._router.navigateByUrl('access-denied');
          return false;
        }
      })
    );
  }
  constructor(
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    private _router: Router,
    private _auth: AngularFireAuth
  ) {}
}
