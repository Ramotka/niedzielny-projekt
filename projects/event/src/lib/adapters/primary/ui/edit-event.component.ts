import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "lib-edit-event",
  templateUrl: "./edit-event.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEventComponent {
  readonly minDate: Date = new Date();
}
