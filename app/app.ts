import {App, IonicApp, Platform, MenuController, Storage, LocalStorage} from 'ionic-angular';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ListPage} from './pages/list/list';
import {IntroPage} from './pages/intro/intro';
import {LoginPage} from './pages/login/login';
import {RegisterPage} from './pages/register/register';
import {SettingsPage} from './pages/settings/settings';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(TranslateLoader, {
        useFactory: (http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [[Http]]
    }),
    TranslateService
  ],
  pipes: [TranslatePipe]
})
class MyApp {
  // make HomePage the root (or first) page
  rootPage: any = HomePage;
  //rootPage: any = IntroPage;
  pages: Array<{title: string, component: any}>;
  theme: string = "secondary";
  local: Storage;
  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private translate: TranslateService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'menu.home', component: HomePage },
      { title: 'menu.intro', component: IntroPage },
      { title: 'menu.list', component: ListPage },
      { title: 'menu.login', component: LoginPage},
      { title: 'menu.register', component: RegisterPage},
      { title: 'menu.settings', component: SettingsPage}
    ];
  }

  initializeApp() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(de|en|hr)/gi.test(userLang) ? userLang : 'en';

    this.translate.setDefaultLang('en');
    this.local = new Storage(LocalStorage);
        this.local.get('language')
            .then((language) => {
                if (language) {
                    this.translate.use(language);
                } else {
                    this.translate.use(userLang);
                } 
            });
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.push(page.component);
  }
}
