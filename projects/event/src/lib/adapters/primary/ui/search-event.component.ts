import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable, startWith, switchMap } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';

@Component({
  selector: 'lib-search-event',
  templateUrl: './search-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEventComponent {
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

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}
}
