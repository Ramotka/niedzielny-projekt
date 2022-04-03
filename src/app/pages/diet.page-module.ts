import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietPage } from './diet.page';
import { AddDietFormComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/add-diet-form.component-module';
import { FirebaseDietServiceModule } from '@event';

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
  ],
  declarations: [DietPage],
  providers: [],
  exports: [],
})
export class DietPageModule {}
