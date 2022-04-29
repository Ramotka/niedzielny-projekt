import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { NotFoundPageModule } from './pages/not-found.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { RegisterPageModule } from './pages/register.page-module';
import { UserEventsPageModule } from './pages/user-events.page-module';
import { EventDetailsPageModule } from './pages/event-details.page-module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['items']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'my-events',
    loadChildren: () => UserEventsPageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'events/:eventId',
    loadChildren: () => EventDetailsPageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  {
    path: 'login',
    loadChildren: () => LoginPageModule,
  },
  {
    path: 'register',
    loadChildren: () => RegisterPageModule,
  },

  // {
  //   path: '404',
  //   loadChildren: () => NotFoundPageModule,
  // },
  // {
  //   path: '**',
  //   redirectTo: '404',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
