import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-select-standard-options',
  templateUrl: './select-standard-options.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectStandardOptionsComponent {
  readonly standardOptions: FormGroup = new FormGroup({
    diet: new FormControl('', Validators.required),
    transport: new FormControl('', Validators.required),
    attraction: new FormControl('', Validators.required),
  });
}
