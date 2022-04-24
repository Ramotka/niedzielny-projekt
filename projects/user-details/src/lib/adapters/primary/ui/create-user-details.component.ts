import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  UserSignOutDtoPort,
  USER_SIGN_OUT_DTO,
} from '../../../application/ports/secondary/user-sign-out-dto-port';
import {
  ADDS_USER_DETAILS_DTO,
  AddsUserDetailsDtoPort,
} from '../../../application/ports/secondary/adds-user-details.dto-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { CurrentUserDTO } from 'projects/core/src/lib/application/ports/secondary/current-user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-create-user-details',
  templateUrl: './create-user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserDetailsComponent {
  readonly userEmail$: Observable<CurrentUserDTO> =
    this._currentUserDtoStorage.asObservable();

  readonly user$ = this._auth.user;

  readonly newUserDetails: FormGroup = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    @Inject(USER_SIGN_OUT_DTO)
    private _userSignOutDto: UserSignOutDtoPort,
    @Inject(ADDS_USER_DETAILS_DTO)
    private _addsUserDetailsDto: AddsUserDetailsDtoPort,
    private _auth: AngularFireAuth,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort,
    private _router: Router
  ) {}

  onLogOutButtonClicked(): void {
    // this._userSignOutDto.userSingOut();
    this._auth.signOut().then(() => this._router.navigate(['']));
  }

  onSaveButtonClicked(newUserDetails: FormGroup): void {
    this._auth.user.pipe(take(1)).subscribe((data) => {
      this._addsUserDetailsDto.add({
        name: newUserDetails.get('name')?.value,
        lastName: newUserDetails.get('lastName')?.value,
        email: data?.email ? data?.email : undefined,
        userId: data?.uid ? data?.uid : undefined,
      });

      this._currentUserDtoStorage.next({
        userId: data?.uid ? data?.uid : undefined,
        userEmail: data?.email ? data?.email : undefined,
      });

      this.newUserDetails.reset();
    });
  }
}
