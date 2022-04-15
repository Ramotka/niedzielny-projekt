import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEventComponent } from './search-event.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchEventComponent],
  providers: [],
  exports: [SearchEventComponent],
})
export class SearchEventComponentModule {}
