import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EventDashboardPage } from "./event-dashboard.page";
import { EventDashboardComponentModule } from "../../../projects/event/src/lib/adapters/primary/ui/event-dashboard.component-module";
import { FirebaseEventServiceModule } from "@event";
import { DietPageModule } from "./diet.page-module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EventDashboardPage,
        children: [
          {
            path: "diet",
            loadChildren: () => DietPageModule,
          },
        ],
      },
    ]),
    EventDashboardComponentModule,
    FirebaseEventServiceModule,
  ],
  declarations: [EventDashboardPage],
  providers: [],
  exports: [],
})
export class EventDashboardPageModule {}
