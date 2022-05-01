import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-roommate-page',
  templateUrl: './roommate.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoommatePage {}
