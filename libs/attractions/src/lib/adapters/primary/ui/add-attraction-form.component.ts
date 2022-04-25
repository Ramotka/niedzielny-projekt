import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_ATTRACTION_DTO,
  AddsAttractionDtoPort,
} from '../../../application/ports/secondary/adds-attraction.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'libs/core/src/lib/application/ports/secondary/context.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-add-attraction-form',
  templateUrl: './add-attraction-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAttractionFormComponent {
  readonly newAttraction: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_ATTRACTION_DTO)
    private _addsAttractionDto: AddsAttractionDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onNewAttractionSubmited(newAttraction: FormGroup, eventId: string): void {
    this._addsAttractionDto.add({
      name: newAttraction.get('name')?.value,
      eventId: eventId,
    });
    this.newAttraction.reset();
  }
}
