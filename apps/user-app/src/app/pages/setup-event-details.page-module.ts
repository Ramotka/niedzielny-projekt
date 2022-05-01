import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupEventDetailsPage } from './setup-event-details.page';
import { FirebaseDietServiceModule } from '@diet';
import {
  FirebaseTransportServiceModule,
  SelectTransportForParticipantComponentModule,
} from '@transport';
import { FirebaseAttractionsServiceModule } from '@attractions';
import { FirebaseParticipantServiceModule } from '@participant';
import { SelectDietForParticipantComponentModule } from 'libs/diet/src/lib/adapters/primary/ui/select-diet-for-participant.component-module';
import { SelectAttractionForParticipantComponentModule } from 'libs/attractions/src/lib/adapters/primary/ui/select-attraction-for-participant.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupEventDetailsPage,
      },
    ]),
    FirebaseDietServiceModule,
    FirebaseTransportServiceModule,
    FirebaseAttractionsServiceModule,
    FirebaseParticipantServiceModule,
    SelectDietForParticipantComponentModule,
    SelectTransportForParticipantComponentModule,
    SelectAttractionForParticipantComponentModule,
  ],
  declarations: [SetupEventDetailsPage],
  providers: [],
  exports: [],
})
export class SetupEventDetailsPageModule {}
