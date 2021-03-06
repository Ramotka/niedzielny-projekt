import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietPage } from './diet.page';

import {
  FirebaseDietServiceModule,
  DietListComponentModule,
  AddDietFormComponentModule,
  InMemoryInputStateStorageModule,
} from '@diet';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DietPage,
      },
    ]),
    AddDietFormComponentModule,
    FirebaseDietServiceModule,
    DietListComponentModule,
    InMemoryInputStateStorageModule,
  ],
  declarations: [DietPage],
  providers: [],
  exports: [],
})
export class DietPageModule {}
