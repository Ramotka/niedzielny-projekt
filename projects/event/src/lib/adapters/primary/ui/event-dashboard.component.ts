import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { EventDTO } from "../../../application/ports/secondary/event.dto";
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from "../../../application/ports/secondary/gets-one-event.dto-port";
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from "projects/core/src/lib/application/ports/secondary/context-dto.storage-port";
import { ContextDTO } from "projects/core/src/lib/application/ports/secondary/context.dto";

@Component({
  selector: "lib-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDashboardComponent {
  event$: Observable<
    EventDTO
  > = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneEventDto.getOne(data.eventId)
      )
    );

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
