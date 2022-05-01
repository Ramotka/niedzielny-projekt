import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from '../../../application/ports/secondary/gets-one-event.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-event-details',
  templateUrl: './user-event-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventDetailsComponent {
  event$: Observable<EventDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(switchMap((data) => this._getsOneEventDto.getOne(data.eventId)));

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    private _router: Router
  ) {}

  onConfirmButtonClicked(event: EventDTO): void {
    this._router.navigate(['setup']);
  }
}
