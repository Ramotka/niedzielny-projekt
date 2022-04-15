import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, switchMap } from 'rxjs';
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
import {
  SearchDtoStoragePort,
  SEARCH_DTO_STORAGE,
} from '../../../application/ports/secondary/search-dto.storage-port';

@Component({
  selector: 'lib-events-list',
  templateUrl: './events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  events$: Observable<EventDTO[]> = this._searchDtoStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDto.getAll(
          data && data.title && data.title.length ? { title: data.title } : {}
        )
      )
    );

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(REMOVES_EVENT_DTO) private _removesEventDto: RemovesEventDtoPort,
    @Inject(SEARCH_DTO_STORAGE)
    private _searchDtoStorage: SearchDtoStoragePort
  ) {}

  onDeleteButtonClicked(eventId: string): void {
    this._removesEventDto.remove(eventId);
  }

  formatDate(obj: any): Date {
    return obj.toDate();
  }
}
