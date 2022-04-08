import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NavigationComponentModule } from "projects/navigation/src/lib/adapters/primary/ui/navigation.component-module";
import { FirebaseNavLinkServiceModule } from "projects/navigation/src";
import { InMemoryContextStorageModule } from "projects/core/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    RouterModule,
    NavigationComponentModule,
    FirebaseNavLinkServiceModule,
    InMemoryContextStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
