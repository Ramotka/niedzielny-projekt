import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from "projects/core/src/lib/application/ports/secondary/context-dto.storage-port";
import { ContextDTO } from "projects/core/src/lib/application/ports/secondary/context.dto";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";
import { EventDTO } from "../../../application/ports/secondary/event.dto";
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from "../../../application/ports/secondary/gets-one-event.dto-port";
import {
  SETS_EVENT_DTO,
  SetsEventDtoPort,
} from "../../../application/ports/secondary/sets-event.dto-port";

@Component({
  selector: "lib-edit-event",
  templateUrl: "./edit-event.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEventComponent {
  currentEvent$: Observable<
    EventDTO
  > = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneEventDto.getOne(data.eventId)
      )
    );
  readonly editEventForm: FormGroup = new FormGroup({
    imageUrl: new FormControl(),
    description: new FormControl(),
    title: new FormControl(),
    date: new FormControl(),
  });

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(SETS_EVENT_DTO) private _setsEventDto: SetsEventDtoPort
  ) {}

  readonly minDate: Date = new Date();

  formatDate(obj: any): Date {
    return obj.toDate();
  }

  onEditEventFormSubmited(editEventForm: FormGroup): void {
    this._setsEventDto.set({
      // id: edittedEvent.id,
      imageUrl: this.editEventForm.get("imageUrl")?.value,
      description: this.editEventForm.get("description")?.value,
      title: this.editEventForm.get("title")?.value,
      date: this.editEventForm.get("date")?.value,
    });
  }
}
