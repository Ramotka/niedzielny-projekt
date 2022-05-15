import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  InputStateDtoStoragePort,
  INPUT_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SETS_ROOM_DTO,
  SetsRoomDtoPort,
} from '../../../application/ports/secondary/sets-room.dto-port';
import {
  REMOVES_ROOM_DTO,
  RemovesRoomDtoPort,
} from '../../../application/ports/secondary/removes-room.dto-port';

@Component({
  selector: 'lib-room-list',
  templateUrl: './room-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent {
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  rooms$: Observable<RoomDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAll({ eventId: data.eventId })
      )
    );
  readonly editingRoom: FormGroup = new FormGroup({
    roomNr: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort,
    @Inject(SETS_ROOM_DTO) private _setsRoomDto: SetsRoomDtoPort,
    @Inject(REMOVES_ROOM_DTO) private _removesRoomDto: RemovesRoomDtoPort
  ) {}

  onEditClicked(room: RoomDTO): void {
    this._inputStateDtoStorage.next({
      roomId: room.id,
      isEditing: true,
    });

    this.editingRoom.get('roomNr')?.setValue(room.roomNr);
    this.editingRoom.get('capacity')?.setValue(room.capacity);
  }

  onSaveChangesClicked(
    changedRoom: Partial<RoomDTO>,
    editingRoom: FormGroup
  ): void {
    this._setsRoomDto.set({
      id: changedRoom.id,
      roomNr: editingRoom.get('roomNr')?.value,
      capacity: editingRoom.get('capacity')?.value,
    });
    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }

  onDeleteBtnClicked(roomId: string): void {
    this._removesRoomDto.remove(roomId);
  }
}
