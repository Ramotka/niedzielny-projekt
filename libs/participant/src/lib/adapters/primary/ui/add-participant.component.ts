import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'libs/core/src/lib/application/ports/secondary/context.dto';
import {
  AddsParticipantDtoPort,
  ADDS_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/adds-participant.dto-port';

@Component({
  selector: 'lib-add-participant',
  templateUrl: './add-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddParticipantComponent {
  readonly newParticipant: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_PARTICIPANT_DTO) private _addsUserDto: AddsParticipantDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onNewParticipantSubmited(newParticipant: FormGroup, eventId: string): void {
    this._addsUserDto.add({
      name: newParticipant.get('name')?.value,
      lastName: newParticipant.get('lastName')?.value,
      email: newParticipant.get('email')?.value,
      eventId: eventId,
    });
    this.newParticipant.reset();
  }
}
