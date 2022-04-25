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
    private _router: Router
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto
      .add({
        email: login.get('email')?.value,
        password: login.get('password')?.value,
      })
      .subscribe(() => this._router.navigate(['profile']));
  }
}
