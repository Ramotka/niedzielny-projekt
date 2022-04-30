import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePageModule } from './pages/home.page-module';
import { EventFormPageModule } from './pages/event-form.page-module';
import { DietPageModule } from './pages/diet.page-module';
import { EventHomePageModule } from './pages/event-home.page-module';
import { UsersPageModule } from './pages/users.page-module';
import { UserFormPageModule } from './pages/user-form.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => homePageModule,
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
    path: 'event/:eventId',
    loadChildren: () => EventHomePageModule,
  },
  { 
        path: 'users', 
        loadChildren: () => UsersPageModule
      },
  { 
        path: 'user-form', 
        loadChildren: () => UserFormPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
