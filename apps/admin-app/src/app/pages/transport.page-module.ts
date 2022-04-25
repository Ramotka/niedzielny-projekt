import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransportPage } from './transport.page';
import { AddTransportFormComponentModule } from 'libs//transport/src/lib/adapters/primary/ui/add-transport-form.component-module';
import { FirebaseTransportServiceModule } from 'libs/transport/src/lib/adapters/secondary/infrastructure/firebase-transport.service-module';
import { TransportListComponentModule } from 'libs//transport/src/lib/adapters/primary/ui/transport-list.component-module';
import { InMemoryInputStateStorageModule } from 'libs/transport/src/lib/adapters/secondary/infrastructure/in-memory-input-state.storage-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransportPage,
      },
    ]),
    AddTransportFormComponentModule,
    FirebaseTransportServiceModule,
    TransportListComponentModule,
    InMemoryInputStateStorageModule,
  ],
  declarations: [TransportPage],
  providers: [],
  exports: [],
})
export class TransportPageModule {}
