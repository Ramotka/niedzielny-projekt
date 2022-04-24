import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GETS_ALL_ATTRACTION_DTO,
  GetsAllAttractionDtoPort,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-attractions-card',
  templateUrl: './attractions-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionsCardComponent {
  attractions$: Observable<AttractionDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAll({ eventId: data.eventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
