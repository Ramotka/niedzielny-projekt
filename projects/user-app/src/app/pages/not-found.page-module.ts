import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundPage,
      },
    ]),
  ],
  declarations: [NotFoundPage],
  providers: [],
  exports: [],
})
export class NotFoundPageModule {}
