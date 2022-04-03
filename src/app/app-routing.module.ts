import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPageModule } from './pages/diet.page-module';

const routes: Routes = [
  {
    path: 'diet',
    loadChildren: () => DietPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
