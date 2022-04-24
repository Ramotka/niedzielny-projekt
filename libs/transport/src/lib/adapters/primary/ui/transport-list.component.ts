import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import {
  GETS_ALL_TRANSPORT_DTO,
  GetsAllTransportDtoPort,
} from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  InputStateDtoStoragePort,
  INPUT_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import {
  REMOVES_TRANSPORT_DTO,
  RemovesTransportDtoPort,
} from '../../../application/ports/secondary/removes-transport.dto-port';
import {
  SETS_TRANSPORT_DTO,
  SetsTransportDtoPort,
} from '../../../application/ports/secondary/sets-transport.dto-port';

@Component({
  selector: 'lib-transport-list',
  templateUrl: './transport-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListComponent {
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  transports$: Observable<TransportDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAll({ eventId: data.eventId })
      )
    );

  readonly editingTransport: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort,
    @Inject(REMOVES_TRANSPORT_DTO)
    private _removesTransportDto: RemovesTransportDtoPort,
    @Inject(SETS_TRANSPORT_DTO) private _setsTransportDto: SetsTransportDtoPort
  ) {}

  onDeleteButtonClicked(itemId: string): void {
    this._removesTransportDto.remove(itemId);
  }

  onEditButtonClicked(transport: TransportDTO): void {
    this._inputStateDtoStorage.next({
      transportId: transport.id,
      isEditing: true,
    });

    this.editingTransport.get('name')?.setValue(transport.name);
  }

  onSaveButtonClicked(changedTransport: Partial<TransportDTO>): void {
    this._setsTransportDto.set({
      id: changedTransport.id,
      name: this.editingTransport.get('name')?.value,
    });

    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }
}
