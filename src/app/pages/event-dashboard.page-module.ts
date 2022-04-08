import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EventDashboardPage } from "./event-dashboard.page";
import { EventDashboardComponentModule } from "../../../projects/event/src/lib/adapters/primary/ui/event-dashboard.component-module";
import { EventIdResolverModule, FirebaseEventServiceModule } from "@event";
import { DietPageModule } from "./diet.page-module";
import { EventIdResolver } from "projects/event/src/lib/adapters/primary/ui/event-id.resolver";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EventDashboardPage,
        resolve: {
          eventId: EventIdResolver,
        },
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
    EventIdResolverModule,
  ],
  declarations: [EventDashboardPage],
  providers: [],
  exports: [],
})
export class EventDashboardPageModule {}
