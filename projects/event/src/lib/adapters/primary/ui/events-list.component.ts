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

@Component({
  selector: "lib-events-list",
  templateUrl: "./events-list.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}
}
