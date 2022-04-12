import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  debounce,
  debounceTime,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  REMOVES_EVENT_DTO,
  RemovesEventDtoPort,
} from '../../../application/ports/secondary/removes-event.dto-port';

@Component({
  selector: 'lib-events-list',
  templateUrl: './events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  readonly searchedEvent: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  events$: Observable<EventDTO[]> = this.searchedEvent.valueChanges.pipe(
    startWith({ title: '' }),
    debounceTime(500),
    switchMap((data: { title: string }) =>
      this._getsAllEventDto.getAll(
        data && data.title && data.title.length ? { title: data.title } : {}
      )
    )
  );

  hasEvents$: Observable<boolean> = this._getsAllEventDto
    .getAll()
    .pipe(map((data) => data.length > 0));

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(REMOVES_EVENT_DTO) private _removesEventDto: RemovesEventDtoPort
  ) {}

  onDeleteButtonClicked(eventId: string): void {
    this._removesEventDto.remove(eventId);
  }

  formatDate(obj: any): Date {
    return obj.toDate();
  }
}
