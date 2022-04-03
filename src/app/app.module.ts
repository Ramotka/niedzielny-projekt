import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NavigationComponentModule } from "projects/navigation/src/lib/adapters/primary/ui/navigation.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    RouterModule,
    NavigationComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
