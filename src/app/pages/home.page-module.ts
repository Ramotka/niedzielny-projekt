import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { homePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: homePage,
      },
    ]),
  ],
  declarations: [homePage],
  providers: [],
  exports: [],
})
export class homePageModule {}
