import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_ROOM_DTO,
  AddsRoomDtoPort,
} from '../../../application/ports/secondary/adds-room.dto-port';
import { Observable } from 'rxjs';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'libs/core/src/lib/application/ports/secondary/context.dto';

@Component({
  selector: 'lib-create-room-form',
  templateUrl: './create-room-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRoomFormComponent {
  readonly createRoom: FormGroup = new FormGroup({
    capacity: new FormControl('', Validators.required),
    roomNr: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_ROOM_DTO) private _addsRoomDto: AddsRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onCreateRoomSubmited(createRoom: FormGroup, eventId: string): void {
    const capacityRoom: number = createRoom.get('capacity')?.value;
    this._addsRoomDto.add({
      capacity: capacityRoom,
      roomNr: createRoom.get('roomNr')?.value,
      eventId: eventId,
      guests: [],
      roomType:
        capacityRoom === 1
          ? 'single'
          : capacityRoom === 2
          ? 'double'
          : capacityRoom === 3
          ? 'triple'
          : capacityRoom === 4
          ? 'four-person'
          : '',
    });
    createRoom.reset();
  }
}
