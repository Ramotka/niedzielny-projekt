import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { InMemoryInputStateStorageModule } from 'projects/participant/src/lib/adapters/secondary/infrastructure/in-memory-input-state.storage-module';
import { AddParticipantComponentModule } from '../../../projects/participant/src/lib/adapters/primary/ui/add-participant.component-module';
import { FirebaseParticipantServiceModule } from '../../../projects/participant/src/lib/adapters/secondary/infrastructure/firebase-participant.service-module';
import {
  ParticipantsListComponentModule,
  SearchParticipantComponentModule,
} from '@participant';
import { InMemorySearchStorageModule } from '@participant';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    InMemoryInputStateStorageModule,
    AddParticipantComponentModule,
    ParticipantsListComponentModule,
    FirebaseParticipantServiceModule,
    SearchParticipantComponentModule,
    InMemorySearchStorageModule,
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
