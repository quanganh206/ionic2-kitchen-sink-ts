import {Page, NavController} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/register/register.html',
  pipes: [TranslatePipe]
})
export class RegisterPage {
  constructor(public nav: NavController, public translate: TranslateService) {
    this.translate = translate;
  }
}
