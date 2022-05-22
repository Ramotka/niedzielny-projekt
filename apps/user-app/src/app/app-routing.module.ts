import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { HomePageModule } from './pages/home.page-module';
import { JoinEventPageModule } from './pages/join-event.page-module';
import { MyEventCheckGuard } from './pages/my-event-check.guard';
import { EventIdResolver } from 'libs/event/src/lib/adapters/primary/ui/event-id.resolver';
import { LoginPageModule } from './pages/login.page-module';
import { RegisterPageModule } from './pages/register.page-module';
import { AccessDeniedPageModule } from './pages/access-denied.page-module';
import { FlowPageModule } from './pages/flow.page-module';
import { NotFoundPageModule } from './pages/not-found.page-module';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'events',
    loadChildren: () => FlowPageModule,
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
  {
    path: 'access-denied',
    loadChildren: () => AccessDeniedPageModule,
  },
  {
    path: '404',
    loadChildren: () => NotFoundPageModule,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
