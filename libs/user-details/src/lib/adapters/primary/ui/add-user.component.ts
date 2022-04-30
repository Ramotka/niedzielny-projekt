import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ADDS_USER_DETAILS_DTO,
  AddsUserDetailsDtoPort,
} from '../../../application/ports/secondary/adds-user-details.dto-port';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  readonly addUser: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_USER_DETAILS_DTO)
    private _addsUserDetailsDto: AddsUserDetailsDtoPort,
    private router: Router
  ) {}

  onAddUserSubmited(addUser: FormGroup): void {
    this._addsUserDetailsDto.add({
      name: addUser.get('name')?.value,
      lastName: addUser.get('lastName')?.value,
      email: addUser.get('email')?.value,
    });
    this.router.navigate(['/users']);
  }
}
