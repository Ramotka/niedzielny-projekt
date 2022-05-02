import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThankYouPage } from './thank-you.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThankYouPage,
      },
    ]),
  ],
  declarations: [ThankYouPage],
  providers: [],
  exports: [],
})
export class ThankYouPageModule {}
