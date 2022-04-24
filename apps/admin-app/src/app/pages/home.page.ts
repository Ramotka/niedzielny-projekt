import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  GetsAllEventDtoPort,
  GETS_ALL_EVENT_DTO,
} from 'projects/event/src/lib/application/ports/secondary/gets-all-event.dto-port';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class homePage {
  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}

  hasEvents$: Observable<boolean> = this._getsAllEventDto
    .getAll()
    .pipe(map((data) => data.length > 0));
}
