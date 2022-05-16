import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';

@Component({
  selector: 'lib-select-room',
  templateUrl: './select-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomComponent {
  availableRooms$: Observable<RoomDTO[]> = this._getsAllRoomDto.getAll();

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort
  ) {}
}
