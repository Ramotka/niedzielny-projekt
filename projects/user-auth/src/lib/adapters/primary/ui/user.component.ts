import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ONE_USER_DTO,
  GetsOneUserDtoPort,
} from '../../../application/ports/secondary/gets-one-user.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/adds-credentials.dto-port';
import {
  REMOVES_CREDENTIALS_DTO,
  RemovesCredentialsDtoPort,
} from '../../../application/ports/secondary/removes-credentials.dto-port';

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user$: Observable<UserDTO | null> = this._getsOneUserDto.getOne();
  readonly login: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(GETS_ONE_USER_DTO) private _getsOneUserDto: GetsOneUserDtoPort,
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    @Inject(REMOVES_CREDENTIALS_DTO)
    private _removesCredentialsDto: RemovesCredentialsDtoPort
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto.add({
      email: login.get('email')?.value,
      password: login.get('password')?.value,
    });
  }

  onSignOutClicked(): void {
    this._removesCredentialsDto.remove();
  }
}
