import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { resetPasswordFormvalidators } from './reset-password-form.validators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
 public hidePass:boolean = true;
 public hideNewPass:boolean = true;
  resetPasswordForm = this.fb.group({
    username:['',[Validators.required]],
    oldPassword: ['',[Validators.required,resetPasswordFormvalidators.cannotContainSpace],resetPasswordFormvalidators.validateOldPassword],
    newPassword: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(9),resetPasswordFormvalidators.cannotContainSpace],resetPasswordFormvalidators.shouldBeUnique],
    confirmPassword: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(9),resetPasswordFormvalidators.cannotContainSpace]]
  }, {
    validator : resetPasswordFormvalidators.matchNewAndConfirmPassword
  })
  constructor(private fb : FormBuilder) { }

  resetPassword(){
    console.log(this.resetPasswordForm.value)
  }

  get newPassword(){
    return this.resetPasswordForm.get('newPassword');
  }

  get oldPassword(){
    return this.resetPasswordForm.get('oldPassword');
  }

  get confirmPassword(){
    return this.resetPasswordForm.get('confirmPassword');
  }

  getOldPasswordErrorMessage(){
    if(this.oldPassword.hasError('required')){
      return "Old Password is required."
    }
  }

}
