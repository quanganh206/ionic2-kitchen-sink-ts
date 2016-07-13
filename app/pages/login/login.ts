import {Page, NavController} from 'ionic-angular';
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES],
  pipes: [TranslatePipe]
})
export class LoginPage {
  authForm: ControlGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.translate = translate;
    this.authForm = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(8), this.checkFirstCharacterValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8), this.checkFirstCharacterValidator])]
    });

    this.username = this.authForm.controls['username'];
    this.password = this.authForm.controls['password'];
  }

  onSubmit(value: string): void {
    if (this.authForm.valid) {
      console.log('Submitted value: ', value);
    }
  }

  checkFirstCharacterValidator(control: AbstractControl): { [s: string]: boolean } {
    if (control.value.match(/^\d/)) {
      return { checkFirstCharacterValidator: true };
    }
  }
}
