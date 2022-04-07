import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageModule } from './pages/dashboard.page-module';
import { EventFormPageModule } from './pages/event-form.page-module';
import { DietPageModule } from './pages/diet.page-module';
import { EventsListPageModule } from './pages/events-list.page-module';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => DashboardPageModule,
  },
  {
    path: 'event-form',
    loadChildren: () => EventFormPageModule,
  },
  {
    path: 'diet',
    loadChildren: () => DietPageModule,
  },
  {
    path: 'eventsList',
    loadChildren: () => EventsListPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
