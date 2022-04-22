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

@Component({
  selector: 'lib-create-user-details',
  templateUrl: './create-user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserDetailsComponent {
  readonly newUserDetails: FormGroup = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    @Inject(USER_SIGN_OUT_DTO)
    private _removesUserDetailsDto: UserSignOutDtoPort,
    @Inject(ADDS_USER_DETAILS_DTO)
    private _addsUserDetailsDto: AddsUserDetailsDtoPort
  ) {}

  onLogOutButtonClicked(): void {
    this._removesUserDetailsDto.userSingOut();
  }

  onSaveButtonClicked(newUserDetails: FormGroup): void {
    this._addsUserDetailsDto.add({
      name: newUserDetails.get('name')?.value,
      lastName: newUserDetails.get('lastName')?.value,
    });
  }
}
