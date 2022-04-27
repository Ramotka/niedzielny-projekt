import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, startWith, Subscription } from 'rxjs';
import {
  SearchEmailDtoStoragePort,
  SEARCH_EMAIL_DTO_STORAGE,
} from '../../../application/ports/secondary/search-email-dto.storage-port';

@Component({
  selector: 'lib-search-user-details',
  templateUrl: './search-user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserDetailsComponent {
  readonly searchedEmail: FormGroup = new FormGroup({
    email: new FormControl(),
  });

  subscription: Subscription = new Subscription();

  constructor(
    @Inject(SEARCH_EMAIL_DTO_STORAGE)
    private _searchEmailDtoStorage: SearchEmailDtoStoragePort
  ) {
    this.subscription = this.searchedEmail.valueChanges
      .pipe(startWith({ email: '' }), debounceTime(400))
      .subscribe((form) =>
        this._searchEmailDtoStorage.next({ email: form.email })
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
