import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietPage } from './diet.page';

import {
  FirebaseDietServiceModule,
  DietListComponentModule,
  AddDietFormComponentModule,
} from '@event';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DietPage,
      },
    ]),
    AddDietFormComponentModule,
    FirebaseDietServiceModule,
    DietListComponentModule,
  ],
  declarations: [DietPage],
  providers: [],
  exports: [],
})
export class DietPageModule {}
