import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_DIET_DTO,
  AddsDietDtoPort,
} from '../../../application/ports/secondary/adds-diet.dto-port';

import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { Observable } from 'rxjs';
import { ContextDTO } from 'projects/core/src/lib/application/ports/secondary/context.dto';

@Component({
  selector: 'lib-add-diet-form',
  templateUrl: './add-diet-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDietFormComponent {
  readonly newDiet: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  currentEvent$: Observable<ContextDTO> =
    this._contextDtoStorage.asObservable();

  constructor(
    @Inject(ADDS_DIET_DTO) private _addsDietDto: AddsDietDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onNewDietSubmited(newDiet: FormGroup, eventId: string): void {
    this._addsDietDto.add({
      name: newDiet.get('name')?.value,
      eventId: eventId,
    });
    this.newDiet.reset();
  }
}
