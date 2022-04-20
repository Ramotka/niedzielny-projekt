import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_USER_DTO,
  AddsUserDtoPort,
} from '../../../application/ports/secondary/adds-user.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'projects/core/src/lib/application/ports/secondary/context.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  readonly newUser: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onNewUserSubmited(newUser: FormGroup, eventId: string): void {
    this._addsUserDto.add({
      name: newUser.get('name')?.value,
      lastName: newUser.get('lastName')?.value,
      email: newUser.get('email')?.value,
      eventId: eventId,
    });
    this.newUser.reset();
  }
}
