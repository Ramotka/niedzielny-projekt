import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { homePageModule } from "./pages/home.page-module";
import { EventFormPageModule } from "./pages/event-form.page-module";
import { DietPageModule } from "./pages/diet.page-module";
import { EventsListPageModule } from "./pages/events-list.page-module";
import { EventDashboardPageModule } from './pages/event-dashboard.page-module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => homePageModule,
  },
  {
    path: "event-form",
    loadChildren: () => EventFormPageModule,
  },
  {
    path: "diet",
    loadChildren: () => DietPageModule,
  },
  {
    path: "event",
    loadChildren: () => EventsListPageModule,
  },
  { 
        path: 'event/:eventId', 
        loadChildren: () => EventDashboardPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}