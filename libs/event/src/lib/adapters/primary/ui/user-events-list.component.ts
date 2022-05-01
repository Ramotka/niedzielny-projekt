import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { ParticipantDTO } from '../../../../../../participant/src/lib/application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../../../../participant/src/lib/application/ports/secondary/gets-all-participant.dto-port';
import { switchMap, map } from 'rxjs/operators';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { CurrentUserDTO } from '../../../../../../core/src/lib/application/ports/secondary/current-user.dto';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-user-events-list',
  templateUrl: './user-events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventsListComponent {
  participants$: Observable<ParticipantDTO[]> = this._currentUserDtoStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllParticipantDto.getAll({ email: data.userEmail })
      )
    );

  events$: Observable<EventDTO[]> = combineLatest([
    this.participants$,
    this._getsAllEventDto.getAll(),
  ]).pipe(
    map(([participants, events]) =>
      events.filter((event) =>
        participants.some((participant) => event.id === participant.eventId)
      )
    )
  );

  readonly selectedEvent: FormGroup = new FormGroup({
    eventId: new FormControl('', Validators.required),
  });

  onConfirmEventSubmitted(selectedEvent: FormGroup): void {
    this._router.navigate(['/events/' + selectedEvent.get('eventId')?.value]);
  }

  onLogOutButtonClicked(): void {
    this._auth.signOut().then(() => this._router.navigate(['']));
  }

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    private _auth: AngularFireAuth,
    private _router: Router
  ) {}
}
