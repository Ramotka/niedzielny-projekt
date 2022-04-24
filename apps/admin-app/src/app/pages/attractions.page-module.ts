import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttractionsPage } from './attractions.page';
import { AddAttractionFormComponentModule } from 'projects//attractions/src/lib/adapters/primary/ui/add-attraction-form.component-module';
import { FirebaseAttractionsServiceModule } from '@attractions';
import { AttractionsListComponentModule } from 'projects//attractions/src/lib/adapters/primary/ui/attractions-list.component-module';
import { InMemoryInputStateStorageModule } from 'projects/attractions/src/lib/adapters/secondary/infrastructure/in-memory-input-state.storage-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttractionsPage,
      },
    ]),
    AddAttractionFormComponentModule,
    FirebaseAttractionsServiceModule,
    AttractionsListComponentModule,
    InMemoryInputStateStorageModule,
  ],
  declarations: [AttractionsPage],
  providers: [],
  exports: [],
})
export class AttractionsPageModule {}
