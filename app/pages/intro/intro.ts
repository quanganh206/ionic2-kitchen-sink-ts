import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {
  constructor(public nav: NavController) {}
  
  goToHome() {
    console.log('goToHome');
    this.nav.setRoot(HomePage);
  }
}
