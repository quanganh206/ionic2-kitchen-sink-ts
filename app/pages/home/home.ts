import {App, IonicApp, Page} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Page({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe]
})
export class HomePage {
  theme: string = "secondary";
  constructor(private app: IonicApp, private translate: TranslateService) {
    this.app = app;
    this.translate = translate;
  }
}
