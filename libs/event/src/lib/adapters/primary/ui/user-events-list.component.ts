import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import { ParticipantDTO } from '../../../../../../participant/src/lib/application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../../../../participant/src/lib/application/ports/secondary/gets-all-participant.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { CurrentUserDTO } from '../../../../../../core/src/lib/application/ports/secondary/current-user.dto';

@Component({
  selector: 'lib-user-events-list',
  templateUrl: './user-events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventsListComponent {
  participants$: Observable<ParticipantDTO[]> =
    this._getsAllParticipantDto.getAll();

  // currentUser$: Observable<CurrentUserDTO> =
  //   this._currentUserDtoStorage.asObservable();

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort
  ) {}
}
