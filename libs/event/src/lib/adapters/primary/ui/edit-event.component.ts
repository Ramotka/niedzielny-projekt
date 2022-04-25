import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'projects/core/src/lib/application/ports/secondary/context.dto';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from '../../../application/ports/secondary/gets-one-event.dto-port';
import {
  SETS_EVENT_DTO,
  SetsEventDtoPort,
} from '../../../application/ports/secondary/sets-event.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-edit-event',
  templateUrl: './edit-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEventComponent implements OnInit {
  editEventForm$: Observable<FormGroup> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneEventDto.getOne(data.eventId)
      ),
      map((event: EventDTO) => {
        return new FormGroup({
          imageUrl: new FormControl(event.imageUrl, Validators.required),
          description: new FormControl(event.description, Validators.required),
          title: new FormControl(event.title, Validators.required),
          date: new FormControl(
            [event.fromDate, event.toDate],
            Validators.required
          ),
          id: new FormControl(event.id),
        });
      })
    );

  constructor(
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(SETS_EVENT_DTO) private _setsEventDto: SetsEventDtoPort,
    private router: Router
  ) {}

  ngOnInit(): void {}
  readonly minDate: Date = new Date();

  formatDate(obj: any): Date {
    return obj.toDate();
  }

  onEditEventFormSubmited(editEventForm: FormGroup): void {
    const dateRange = editEventForm.get('date')?.value;
    this._setsEventDto.set({
      id: editEventForm.get('id')?.value,
      imageUrl: editEventForm.get('imageUrl')?.value,
      description: editEventForm.get('description')?.value,
      title: editEventForm.get('title')?.value,
      fromDate: dateRange[0],
      toDate: dateRange[1],
    });
    this.router.navigate(['/']);
  }
}
