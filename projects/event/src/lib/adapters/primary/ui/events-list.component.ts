import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { EventDTO } from "../../../application/ports/secondary/event.dto";
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from "../../../application/ports/secondary/gets-all-event.dto-port";
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from "projects/core/src/lib/application/ports/secondary/context-dto.storage-port";

@Component({
  selector: "lib-events-list",
  templateUrl: "./events-list.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onEventClicked(event: EventDTO): void {
    this._contextDtoStorage.next({ eventId: event.id });
  }
}
