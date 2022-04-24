import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDashboardComponent } from './event-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EventDashboardComponent],
  providers: [],
  exports: [EventDashboardComponent],
})
export class EventDashboardComponentModule {}
