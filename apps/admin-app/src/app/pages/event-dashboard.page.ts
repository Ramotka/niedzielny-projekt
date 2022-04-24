import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-event-dashboard-page',
  templateUrl: './event-dashboard.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDashboardPage {}
