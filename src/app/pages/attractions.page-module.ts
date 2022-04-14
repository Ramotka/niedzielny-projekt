import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttractionsPage } from './attractions.page';
import { AddAttractionFormComponentModule } from '../../../projects/attractions/src/lib/adapters/primary/ui/add-attraction-form.component-module';
import { FirebaseAttractionsServiceModule } from '@attractions';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttractionsPage,
      },
    ]),
    AddAttractionFormComponentModule,
    FirebaseAttractionsServiceModule,
  ],
  declarations: [AttractionsPage],
  providers: [],
  exports: [],
})
export class AttractionsPageModule {}
