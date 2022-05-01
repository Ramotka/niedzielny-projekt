import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupEventDetailsPage } from './setup-event-details.page';
import { SetupEventDetailsComponentModule } from 'libs/event/src/lib/adapters/primary/ui/setup-event-details.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupEventDetailsPage,
      },
    ]),
    SetupEventDetailsComponentModule,
  ],
  declarations: [SetupEventDetailsPage],
  providers: [],
  exports: [],
})
export class SetupEventDetailsPageModule {}
