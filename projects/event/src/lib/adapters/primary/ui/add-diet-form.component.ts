import { FormGroup, FormControl } from '@angular/forms';
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

@Component({
  selector: 'lib-add-diet-form',
  templateUrl: './add-diet-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDietFormComponent {
  readonly newDiet: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(@Inject(ADDS_DIET_DTO) private _addsDietDto: AddsDietDtoPort) {}

  onNewDietSubmited(newDiet: FormGroup): void {
    this._addsDietDto.add({
      name: newDiet.get('name')?.value,
    });
    this.newDiet.reset();
  }
}
