import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, SignInComponent, SignUpComponent],
  exports: [UserComponent]

})
export class UserModule { }
