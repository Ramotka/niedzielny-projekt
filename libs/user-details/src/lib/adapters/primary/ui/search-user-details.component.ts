import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-search-user-details',
  templateUrl: './search-user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserDetailsComponent {
  readonly searchedEmail: FormGroup = new FormGroup({email: new FormControl()});
}
