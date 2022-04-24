import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomePage } from './user-home.page';
import { UserIdResolver } from 'projects/user-auth/src/lib/adapters/primary/ui/user-id.resolver';
import { UserDetailsPageModule } from './user-details.page-module';
import { UserIdResolverModule } from 'projects/user-auth/src/lib/adapters/primary/ui/user-id.resolver-module';
import { FirebaseUserDetailsServiceModule } from 'projects/user-details/src/lib/adapters/secondary/infrastructure/firebase-user-details.service-module';

@NgModule({
  imports: [
    CommonModule,
    UserIdResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserHomePage,
        resolve: {
          eventId: UserIdResolver,
        },
        children: [
          {
            path: 'completeProfile',
            loadChildren: () => UserDetailsPageModule,
          },
        ],
      },
    ]),
    FirebaseUserDetailsServiceModule,
  ],
  declarations: [UserHomePage],
  providers: [],
  exports: [],
})
export class UserHomePageModule {}
