import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  InMemoryContextStorageModule,
  InMemoryCurrentUserStorageModule,
} from '@core';
import { EventIdResolverModule } from '@event';
import { FirebaseParticipantServiceModule } from '@participant';
import { UserEmailResolverModule } from 'libs/user-auth/src/lib/adapters/primary/ui/user-email.resolver-module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    InMemoryCurrentUserStorageModule,
    EventIdResolverModule,
    UserEmailResolverModule,
    InMemoryContextStorageModule,
    FirebaseParticipantServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
