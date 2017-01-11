import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Characters } from '../pages/characters/characters';
import { Cards } from '../pages/cards/cards';
import { Home } from '../pages/home/home';
import { Tools } from '../pages/tools/tools';
import { CharacterModalPage } from '../pages/character-modal/character-modal';
@NgModule({
  declarations: [
    MyApp,
    Home,
    Cards,
    Characters,
    CharacterModalPage,
    Tools
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Cards,
    Characters,
    CharacterModalPage,
    Tools
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
