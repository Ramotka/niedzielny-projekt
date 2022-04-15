import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, startWith, Subscription } from 'rxjs';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
} from '@angular/core';
import {
  SearchDtoStoragePort,
  SEARCH_DTO_STORAGE,
} from '../../../application/ports/secondary/search-dto.storage-port';

@Component({
  selector: 'lib-search-event',
  templateUrl: './search-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEventComponent implements OnDestroy {
  readonly searchedEvent: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  subscription: Subscription = new Subscription();

  constructor(
    @Inject(SEARCH_DTO_STORAGE) private _searchDtoStorage: SearchDtoStoragePort
  ) {
    this.subscription = this.searchedEvent.valueChanges
      .pipe(startWith({ title: '' }), debounceTime(400))
      .subscribe((form) => this._searchDtoStorage.next({ title: form.title }));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
