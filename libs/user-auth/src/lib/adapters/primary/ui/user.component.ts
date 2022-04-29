import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/adds-credentials.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { take, Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ONE_USER_DTO,
  GetsOneUserDtoPort,
} from '../../../application/ports/secondary/gets-one-user.dto-port';

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly login: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort,
    private _router: Router,
    private _auth: AngularFireAuth,
    @Inject(GETS_ONE_USER_DTO) private _getsOneUserDto: GetsOneUserDtoPort
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto
      .add({
        email: login.get('email')?.value,
        password: login.get('password')?.value,
      })
      .subscribe((data) => {
        // this._getsOneUserDto
        //   .getOne()
        //   .pipe(take(1))
        //   .subscribe((data) => {
        //     this._router.navigate(['/my-events']);
        //   });

        this._auth.user.pipe(take(1)).subscribe((data) =>
          this._currentUserDtoStorage.next({
            userEmail: data?.email ? data?.email : undefined,
          })
        );

        this._router.navigate(['/my-events']);
      });
  }
}
