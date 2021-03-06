import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    @Inject(ADDS_EVENT_DTO) private _addsEventDto: AddsEventDtoPort,
    private router: Router
  ) {}

  onCreateEventSubmited(createEvent: FormGroup): void {
    if (createEvent.invalid) {
      return;
    }

    const dateRange = createEvent.get('date')?.value;

    this._addsEventDto.add({
      imageUrl: createEvent.get('imageUrl')?.value,
      description: createEvent.get('description')?.value,
      title: createEvent.get('title')?.value,
      fromDate: dateRange[0],
      toDate: dateRange[1],
    });
    this.router.navigate(['/']);
  }
}
