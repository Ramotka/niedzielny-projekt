import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
}
