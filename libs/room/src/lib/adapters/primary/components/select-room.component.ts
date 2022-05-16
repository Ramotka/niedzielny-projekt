import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, switchMap, map, tap } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { RoomListComponent } from '../ui/room-list.component';

@Component({
  selector: 'lib-select-room',
  templateUrl: './select-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomComponent {
  availableRooms$: Observable<RoomDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAll({ eventId: data.eventId })
      ),
      map((data) =>
        data.filter((room) => room.guests.length !== room.capacity)
      ),
      tap((test) => console.log(test))
      // data.filter((room) => room.guests.length > room.capacity))
    );

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
