import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { UserComponentModule } from 'projects/user-auth/src/lib/adapters/primary/ui/user.component-module';
import { FirebaseAuthServiceModule } from 'projects/user-auth/src/lib/adapters/secondary/infrastructure/firebase-auth.service-module';
import { CreateUserComponentModule } from 'projects/user-auth/src/lib/adapters/primary/ui/create-user.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    UserComponentModule,
    FirebaseAuthServiceModule,
    CreateUserComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
