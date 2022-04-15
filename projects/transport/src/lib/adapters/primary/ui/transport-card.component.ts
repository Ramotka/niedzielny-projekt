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
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-transport-card',
  templateUrl: './transport-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportCardComponent {
  transports$: Observable<TransportDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAll({ eventId: data.eventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
