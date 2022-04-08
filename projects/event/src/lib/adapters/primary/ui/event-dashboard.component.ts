import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { EventDTO } from "../../../application/ports/secondary/event.dto";
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from "../../../application/ports/secondary/gets-one-event.dto-port";

@Component({
  selector: "lib-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDashboardComponent {
  event$: Observable<EventDTO> = this._getsOneEventDto.getOne(
    "3d0JmlDVyGcF9TXghKt9"
  );

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort
  ) {}
}
