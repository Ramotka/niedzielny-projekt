import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionsCardComponent } from './attractions-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AttractionsCardComponent],
  providers: [],
  exports: [AttractionsCardComponent],
})
export class AttractionsCardComponentModule {}
