import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "lib-create-event",
  templateUrl: "./create-event.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent {
  readonly createEvent: FormGroup = new FormGroup({
    imageUrl: new FormControl(),
    description: new FormControl(),
    title: new FormControl(),
    date: new FormControl(),
  });
}
