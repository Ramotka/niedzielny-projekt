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

  // userEvents$: Observable<EventDTO[]> = 
  // userEvents$: Observable<EventDTO[]> = this._currentUserDtoStorage
  //   .asObservable()
  //   .pipe(
  //     switchMap((data) =>
  //       this._getsAllParticipantDto
  //         .getAll({ email: data.userEmail })
  //         .pipe(
  //           switchMap((data) =>
  //             this._getsAllEventDto.getAll({
  //               id: data.forEach((item) => item.eventId),
  //             })
  //           )
  //         )
  //     )
  //   );

  onTakeButtonClicked(participant: Partial<ParticipantDTO>): void {
    // this._getsAllEventDto.getAll({ id: participant.eventId });
    this._contextDtoStoragePort.next({ eventId: participant.eventId });

    this._router.navigate(['my-events/' + participant.eventId]);
  }

  onLogOutButtonClicked(): void {
    // this._userSignOutDto.userSingOut();
    this._auth.signOut().then(() => this._router.navigate(['']));
  }

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    private _auth: AngularFireAuth,
    private _router: Router
  ) {}
}
