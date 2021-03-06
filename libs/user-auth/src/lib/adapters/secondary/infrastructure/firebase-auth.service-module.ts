import { ErrorHandler, NgModule } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GETS_ONE_USER_DTO } from '../../../application/ports/secondary/gets-one-user.dto-port';
import { ADDS_CREDENTIALS_DTO } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { REMOVES_CREDENTIALS_DTO } from '../../../application/ports/secondary/removes-credentials.dto-port';

class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // do something with the exception
    console.log(error);
  }
}

@NgModule({
  imports: [AngularFireAuthModule],
  declarations: [],
  providers: [
    FirebaseAuthService,
    { provide: GETS_ONE_USER_DTO, useExisting: FirebaseAuthService },
    { provide: ADDS_CREDENTIALS_DTO, useExisting: FirebaseAuthService },
    { provide: REMOVES_CREDENTIALS_DTO, useExisting: FirebaseAuthService },
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
  exports: [],
})
export class FirebaseAuthServiceModule {}
