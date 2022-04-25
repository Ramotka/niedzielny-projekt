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
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';

@Component({
  selector: 'lib-event-dropdown-list',
  templateUrl: './event-dropdown-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDropdownListComponent {
  event$: Observable<EventDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(switchMap((data) => this._getsOneEventDto.getOne(data.eventId)));

  allEvents$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}
}
