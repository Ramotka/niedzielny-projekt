import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserManagementPage } from './user-management.page';
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
        component: UserManagementPage,
      },
    ]),
    InMemoryInputStateStorageModule,
    AddParticipantComponentModule,
    ParticipantsListComponentModule,
    FirebaseParticipantServiceModule,
    SearchParticipantComponentModule,
    InMemorySearchStorageModule,
  ],
  declarations: [UserManagementPage],
  providers: [],
  exports: [],
})
export class UserManagementPageModule {}
