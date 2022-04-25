import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-diet-card',
  templateUrl: './diet-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DietCardComponent {
  diets$: Observable<DietDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllDietDto.getAll({ eventId: data.eventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
