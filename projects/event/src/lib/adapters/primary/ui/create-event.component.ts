import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ADDS_EVENT_DTO,
  AddsEventDtoPort,
} from '../../../application/ports/secondary/adds-event.dto-port';

@Component({
  selector: 'lib-create-event',
  templateUrl: './create-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent {
  readonly createEvent: FormGroup = new FormGroup({
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  readonly minDate: Date = new Date();

  constructor(
    @Inject(ADDS_EVENT_DTO) private _addsEventDto: AddsEventDtoPort
  ) {}

  onCreateEventSubmited(createEvent: FormGroup): void {
    if (createEvent.invalid) {
      return;
    }
    this._addsEventDto.add({
      imageUrl: createEvent.get('imageUrl')?.value,
      description: createEvent.get('description')?.value,
      title: createEvent.get('title')?.value,
      date: createEvent.get('date')?.value,
    });
    this.createEvent.reset();
  }
}
