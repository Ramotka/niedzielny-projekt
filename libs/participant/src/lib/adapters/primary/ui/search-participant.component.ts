import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, startWith, Subscription } from 'rxjs';
import {
  SearchDtoStoragePort,
  SEARCH_DTO_STORAGE,
} from '../../../application/ports/secondary/search-dto.storage-port';

@Component({
  selector: 'lib-search-participant',
  templateUrl: './search-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchParticipantComponent {
  readonly searchedParticipant: FormGroup = new FormGroup({
    // name: new FormControl(),
    // lastName: new FormControl(),
    email: new FormControl(),
  });

  subscription: Subscription = new Subscription();

  constructor(
    @Inject(SEARCH_DTO_STORAGE) private _searchDtoStorage: SearchDtoStoragePort
  ) {
    this.subscription = this.searchedParticipant.valueChanges
      .pipe(startWith({ email: '' }), debounceTime(400))
      .subscribe((form) => this._searchDtoStorage.next({ email: form.email }));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
