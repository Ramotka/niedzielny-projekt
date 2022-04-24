import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/current-user-dto.storage-port';

@Injectable()
export class UserIdResolver implements Resolve<boolean> {
  constructor(
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._currentUserDtoStorage.next({ userId: route.params?.['userId'] });
    return of(true);
  }
}
