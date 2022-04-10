import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDashboardComponent } from './event-dashboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EventDashboardComponent],
  providers: [],
  exports: [EventDashboardComponent],
})
export class EventDashboardComponentModule {}
