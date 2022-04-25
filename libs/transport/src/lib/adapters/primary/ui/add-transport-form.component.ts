import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TRANSPORT_DTO,
  AddsTransportDtoPort,
} from '../../../application/ports/secondary/adds-transport.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'libs/core/src/lib/application/ports/secondary/context.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-add-transport-form',
  templateUrl: './add-transport-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTransportFormComponent {
  readonly newTransport: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_TRANSPORT_DTO) private _addsTransportDto: AddsTransportDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onNewTransportButtonSubmited(newTransport: FormGroup, eventId: string): void {
    this._addsTransportDto.add({
      name: newTransport.get('name')?.value,
      eventId: eventId,
    });
    this.newTransport.reset();
  }
}
