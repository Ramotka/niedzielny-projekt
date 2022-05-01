import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { Observable, of, take } from 'rxjs';

@Injectable()
export class UserEmailResolver implements Resolve<boolean> {
  constructor(
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _auth: AngularFireAuth
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._auth.user.pipe(take(1)).subscribe((user) =>
      this._currentUserDtoStoragePort.next({
        userEmail: user?.email as string,
      })
    );
    return of(true);
  }
}
